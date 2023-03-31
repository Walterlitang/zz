const express=require("express");

const app=express();

//自定义中间件
//这是解析表单数据的中间件
app.use((req,res,next)=>{
    //定义中间件具体的业务逻辑

    //定义变量，用来存储客户端发送过来的请求体数据
    let str="";
    //监听req的data事件
    req.on("data",(chunk)=>{
        str+=chunk;
        // console.log(chunk);
    })
    //3.监听req的end事件
    req.on("end",()=>{
        console.log(str);
    })
    // next();
})

app.get("/user",(req,res)=>{
    res.send("sdavsdv")
})

app.listen(8080,function(){
    console.log("Server Listen");
})