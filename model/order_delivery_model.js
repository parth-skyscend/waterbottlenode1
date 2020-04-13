var db=require('../dbconnection');


var order_delivery={
    getAllorderdelivery:function(callback)
    {
       return db.query("select od.*,o.*,e.* from order_delivery_table od,order_tbl o,emp_tbl e where od.fk_order_id=o.order_id and od.fk_emp_id=e.emp_id",callback);
         //return db.query("select * from order_delivery_table",callback);
    },
    deleteorderdelivery:function(order_delivery_id,callback)
    {
      return db.query("delete from order_delivery_table where order_delivery_id=?",[order_delivery_id],callback);
    },
    addorderdelivery:function(item,callback)
    {
      return db.query("insert into order_delivery_table(fk_order_id,fk_emp_id,delivery_date,comment)values(?,?,?,?)",[item.fk_order_id,item.fk_emp_id,item.delivery_date,item.comment],callback);
    },
    getorderdeliverybyid:function(order_delivery_id,callback)
    {
        return db.query("select * from order_delivery_table where order_delivery_id=?",[order_delivery_id],callback);
    },
    updateorderdelivery:function(order_delivery_id,item,callback)
    {
        return db.query("update order_delivery_table set delivery_date=?,comment=? where order_delivery_id=?",[item.delivery_date,item.comment,order_delivery_id],callback);
    },
    deleteAll:function(item,callback){
      return db.query("delete from order_delivery_table where order_delivery_id in (?)",[item],callback);
   },
   getAllOrderAssigned(callback)
    {
        return db.query('select od.*,o.*,e.*,p.* from order_delivery_table od,order_tbl o,product_tbl p,emp_tbl e where o.order_id=od.fk_order_id and e.emp_id=od.fk_emp_id and p.pro_id=o.fk_pro_id',callback);
    },
    getAllOrderNotAssigned(callback)
    {
      return db.query('SELECT o.*,c.*,p.* FROM order_tbl o,customer_tbl c,product_tbl p WHERE p.pro_id=o.fk_pro_id and c.customer_id=o.fk_customer_id and  o.order_id NOT IN ( SELECT od.fk_order_id FROM order_delivery_table od) ',callback)
    },
    AddOrderAssigned:function(item,callback)
    {
        var arr1=[];
        if(item != null) {
            for (let i = 0; i < item.selectedOrderArr.length; i++) {
                const order_id = item.selectedOrderArr[i];
                const emp_id = item.selectedEmployeeID;
                const delivery_date=new Date();
                const comment="Assigned"
                arr1.push([order_id,emp_id,delivery_date,comment]);
            }
           return db.query("insert into order_delivery_table (fk_order_id,fk_emp_id,delivery_date,comment) values ?",[arr1],callback); 
        }
    },
    addOrderDeliveryUserSide:function(item,callback){
      console.log(item)
      return db.query("insert into order_delivery_table (fk_order_id,comment) values (?,?)",[item.fk_order_id,item.comment],callback)
    },
    getRecords:function(item,callback){
      return db.query("select * from order_tbl where order_date=?",[item.date],callback);
    }
};
module.exports=order_delivery;