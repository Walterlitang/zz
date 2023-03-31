const express=require("express");

const router=express.Router();


router.get("/user",(req,res)=>{
    let query=req.query;
    console.log(query);
    res.send({
        status:0,//0表示处理失败，1表示处理成功
        msg:"Get请求成功",//状态的描述
        data:query
    });
})

// console.log(router);

module.exports=router;