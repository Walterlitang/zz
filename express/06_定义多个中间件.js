const express=require("express");
const app=express();

app.use((req,res,next)=>{
    req.startTime=new Date();
    console.log("中间件一");
    next();
})

app.use((req,res,next)=>{
    req.startTime=new Date();
    console.log("中间件二");
    next();
})

app.get("/",(req,res)=>{
    console.log(req.startTime);
    res.send("这是返回的数据");
})

app.listen(8080,()=>{
    console.log("Server Listen");
})