const express=require("express");
//引入路由模块
const apiRoute=require("./15_路由模块.js");

const app=express();

// console.log(route);

app.use("/api",apiRoute);

app.listen(8080,()=>{
    console.log("Server Listen");
})