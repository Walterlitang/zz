const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    //req是请求对象，包含了客户端的数据和属性
    //req.url是客户端请求的url地址
    let url=req.url;
    console.log(url);
    //req.method是客户端请求的方法
    let method=req.method;
    console.log(method);

    //res是客户端响应对象
    //res.end()向客户端发送内容并结束这次请求的处理
    res.end("dvsvsbvsfb");
})
server.listen(80,()=>{
    console.log("创建成功");
})