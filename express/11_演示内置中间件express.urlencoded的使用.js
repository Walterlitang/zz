const express=require("express");
const app=express();
//解析x-www-form-urlencoded的数据
app.use(express.urlencoded({"extended":false}));
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})
app.listen(8080,()=>{
    console.log("Server Listen");
})