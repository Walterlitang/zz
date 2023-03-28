const express=require("express");
const app=express();

//全局生效的中间件
app.use((req,res,next)=>{
    console.log("这是全局中间件");
    next();
})

const mv=function(req,res,next){
    console.log("这是局部中间件");
    next();
}

//调用的局部生效的中间件
app.get("/",mv,(req,res)=>{
    res.send("这是/请求");
});

app.get("/user",(req,res)=>{
    res.send("这是/user请求");
})

app.get("")

app.listen(8080,()=>{
    console.log("Server Listen");
})