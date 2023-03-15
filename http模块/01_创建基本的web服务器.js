// 导入http模块
const http=require("http");
// 创建web服务器
const server=http.createServer();
// 监听事件
server.on("request",function(req,res){
    console.log("监听到请求事件时触发");
})
server.listen(80,function(){
    console.log("创建服务器成功");
})
