var db=require('../dbconnection');
var order_user={
    getAllOrderByUser:function(user_email,callback){
    return db.query("select u.user_email,c.customer_id,c.fk_user_email,o.*,p.* from user_tbl u,customer_tbl c,order_tbl o,product_tbl p where u.user_email=c.fk_user_email and c.customer_id=o.fk_customer_id and p.pro_id=o.fk_pro_id and u.user_email=?",[user_email],callback)
    }
}
module.exports=order_user