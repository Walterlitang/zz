//请求框架
const express=require("express");
//创建web服务器
const app=express();

//监听服务器请求事件
app.get("/user/:id/:name",(req,res)=>{
    //获取url请求参数
    let str=req.query;
    console.log(str);
    //获取动态参数
    let newStr=req.params;
    console.log(newStr);
    res.send("abc");
})

//启动web服务器
app.listen(80,()=>{
    console.log("服务器启动成功");
})


