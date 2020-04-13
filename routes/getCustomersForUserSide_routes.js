var express=require('express');
var router=express.Router();
var customer_routes=require('../model/customer_model');
router.get('/:fk_user_email',function(req,res,next){
    customer_routes.getCustomerForUserSide(req.params.fk_user_email,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),

module.exports=router;