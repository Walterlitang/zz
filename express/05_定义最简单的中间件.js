//引入express包
const express=require("express");
//创建web服务器
const app=express();

//定义一个简单的中间件
const mv=function(req,res,next){
    console.log("中间件");
    next();
}

//将mv注册为全局生效的中间件
app.use(mv);
let a="avsdvsdvsv";
//这是定义全局中间件简写形式
app.use((req,res,next)=>{
    console.log("中间件简写");
    next();
})

//get请求
app.get("/",(req,res)=>{
    res.send("agwrgwg")
})


//开启web服务器
app.listen(8080,function(){
    console.log("Server listen");
})


