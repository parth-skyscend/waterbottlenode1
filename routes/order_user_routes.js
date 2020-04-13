var express=require('express');
var router=express.Router();
var order_user=require('../model/getUserOrder');
router.get('/:user_email',function(req,res,next){
    order_user.getAllOrderByUser(req.params.user_email,function(err,rows){
        if(err){
            res.json(err); 
        }
        else{
            res.json(rows);
        }
    })
}),
module.exports=router;