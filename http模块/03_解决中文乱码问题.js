const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    res.setHeader("Content-Type","text/html;charset=utf-8")
    res.end("请求结束");
});
server.listen(80,()=>{
    console.log("Server success");
})

