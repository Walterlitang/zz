//引入express框架
const express=require("express");
//创建web服务器
const app=express();
//托管files目录
app.use("/abc",express.static("files"));
//托管public目录
app.use(express.static("public"));
//启动web服务器
app.listen(80,()=>{
    console.log("Server Opdvsdven")
})