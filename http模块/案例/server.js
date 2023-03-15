const http=require("http");
const fs=require("fs");
//引入路径处理模块
const path=require("path");
//创建web服务器
const server=http.createServer();
server.on("request",(req,res)=>{
    //监听request事件
    let url=req.url;//获得每次请求的url路径
    console.log("abc");
    console.log(url);
    fs.readFile(`.${url}`,"utf8",(err,data)=>{
        if(err) return res.end("<h1>404 Not Found!</h1>");
        res.end(data);
    })
})
server.listen(80,()=>{
    console.log("Server running at http://127.0.0.1");
})

