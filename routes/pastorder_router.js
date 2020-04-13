var express=require('express');
var router=express.Router();
var order_router=require('../model/order_model');
router.get('/:id',function(req,res,next){
    order_router.getOrderbyCustomerId(req.params.id,function(err,rows){
         if(err){
             res.json(err); 
         }
         else{
             res.json(rows);
         }
     })
 }),

module.exports=router;