var db=require('../dbconnection');
var user={
    login:function (item,callback){
        return db.query("select * from user_tbl where user_email=? and user_password=?",[item.user_email,item.user_password],callback);
    }
};
module.exports=user