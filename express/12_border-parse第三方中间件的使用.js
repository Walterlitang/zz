const express=require("express");
const app=express();
//引入body-parser第三方中间件
const parser=require("body-parser");
//引入parser下的方法，使用中间件解析
app.use(parser.urlencoded({extended:false}));
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})
app.listen(8080,()=>{
    console.log("Server Listen");
})