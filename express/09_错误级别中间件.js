const express=require("express");
const app=express();

//定义路由
app.get("/",(req,res)=>{
    //人为制造的错误
    dvdasvsdv;
    //错误发生后执行错误中间件，不会执行后面的代码
    res.send("错误级别中间件");
})

//错误路由中间件：注意，需要放到所有中间件的后面
app.use((err,req,res,next)=>{
    console.log("错误路由中间件使用");
    res.send("错误信息"+err.message)
})

app.listen(8080,()=>{
    console.log("Server Listen");
})
