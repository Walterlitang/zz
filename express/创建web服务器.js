//引入express包
const express=require("express");
//创建服务器
const app=express();

//监听客户端的请求，并返回响应的内容
app.get("/user",(req,res)=>{
    //响应的内容，可以是json对象
    res.send({"username":"Jack","age":18});
})

app.post("/user",(req,res)=>{
    //响应的内容，可以是字符串
    res.send("请求成功");
})

//启动服务器
app.listen(8080,()=>{
    console.log("服务器创建成功");
})


