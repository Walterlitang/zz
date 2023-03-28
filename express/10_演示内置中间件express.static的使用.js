const express=require("express");
const app=express();

//配置解析表单的中间件
app.use(express.json());

app.post("/user",(req,res)=>{
    //不配置express.json()拿到的数据是undefined
    res.send(req.body);
})
app.listen(8080,()=>{
    console.log("Server Listen");
})
