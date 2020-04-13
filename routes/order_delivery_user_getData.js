var express=require('express');
var router=express.Router();
var order_delivery_router=require('../model/order_delivery_model');

router.post('/',function(req,res,next){
    order_delivery_router.getRecords(req.body,function(err,rows){
        console.log(req.body);
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})
 


module.exports=router;