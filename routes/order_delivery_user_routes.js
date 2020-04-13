var express=require('express');
var router=express.Router();
var order_delivery_router=require('../model/order_delivery_model');

router.post('/',function(req,res,next){
    order_delivery_router.addOrderDeliveryUserSide(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.get('/:order_date',function(req,res,next){
    order_delivery_router.getRecords(req.params.order_date,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
 


module.exports=router;