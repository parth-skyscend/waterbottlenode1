var db=require('../dbconnection');
// var dateformat = require("dateformat");

var order={ 
    getAllorder:function(callback)
    {
        return db.query("select o.*,c.*,p.* from order_tbl o,product_tbl p,customer_tbl c where o.fk_pro_id=p.pro_id and o.fk_customer_id=c.customer_id",callback);
    },
    deleteorder:function(order_id,callback)
    {
      return db.query("delete from order_tbl where order_id=?",[order_id],callback);
    },
    addorder:function(item,callback)
    {
      const arr1= [];
         for(let j =0;  j< item.cart.length;j++) {
            var fk_pro_id = item.cart[j].productItem.pro_id;
            var  qty = item.cart[j].qty;
            var order_date = item.order_date;
            // var order_date=new Date();
            // var d = dateformat(order_date,"dddd, mmmm dS, yyyy, h:MM");
            // console.log(d);
  
            var fk_customer_id=item.fk_customer_id;
            var order_status=item.order_status;
            arr1.push([fk_pro_id, qty, order_date,fk_customer_id,order_status]);
         }
        console.log(arr1);
      return db.query("insert into order_tbl(fk_pro_id,qty,order_date,fk_customer_id,order_status) values ?",[arr1],callback);
    },
    getorderbyid:function(order_id,callback)
    {
        return db.query("select * from order_tbl where order_id=?",[order_id],callback);
    },
    updateorder:function(order_id,item,callback)
    {
        return db.query("update order_tbl set fk_pro_id=?,qty=?,order_date=?,fk_customer_id=?,order_status=? where order_id=?",[item.fk_pro_id,item.qty,item.order_date,item.fk_customer_id,item.order_status,order_id],callback);
    },
    deleteAll:function(item,callback){
      return db.query("delete from order_tbl where order_id in (?)",[item],callback);
   },
   getOrderbyCustomerId:function(id,callback)
   {
     return db.query("select c.*,p.*,o.* from customer_tbl c,product_tbl p,order_tbl o where o.fk_customer_id=? and c.customer_id=o.fk_customer_id and p.pro_id=o.fk_pro_id",[id],callback);
   }
}; 

module.exports=order;