const path=require("path");
var pathName="./a/a/b/c/d/index.html";
//完整文件名
var str=path.basename(pathName);
console.log(str);
//去掉后缀的文件名
var newStr=path.basename(pathName,".html");
console.log(newStr);