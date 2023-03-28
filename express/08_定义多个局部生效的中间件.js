const express=require("express");
const app=express();

const mv1=function(req,res,next){
    console.log("中间件一");
    next();
}

const mv2=function(req,res,next){
    console.log("中间件二");
    next();
}

//只有一个中间件
app.get("/",mv1,(req,res)=>{
    res.send("这是/路由");
})

//两个中间件
app.get("/user",[mv1,mv2],(req,res)=>{
    res.send("这是user路由");
})

app.listen(8080,()=>{
    console.log("Server Listen");
})