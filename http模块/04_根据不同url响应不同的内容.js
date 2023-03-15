const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    let content="<h1>404 Not Found!</h1>";
    //获取请求的url地址
    let url=req.url;
    // 判断用户的请求是否为/或index.html首页
    if(url=="/"||url=="/index.html"){
        res.end("<h1>欢迎</h1>");
    }else if(url=="/about.html"){
        //判断用户是否为/about.html关于页面
        res.end("<h1>关于</h1>");
    }
    //设置Content-Type响应头，防止中文乱码
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end(content);
})
server.listen(80,()=>{
    console.log("Server running at http://127.0.0.1:80");
})


