// 1.导入fs模块
const fs=require("fs");
// 2.调用readFile方法
fs.readFile("./1.t0xt","utf-8",function(err,data){
    //读取成功，err的值为null
    //读取失败，err的值为错误对象，data值为undefined
    if(err){
        return console.log(err.message);
    }
    console.log("读取成功！",data);
})