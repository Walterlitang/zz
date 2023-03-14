const path=require("path");
var str=path.join("./a/c/s","./b","../../","/c","./d");
console.log(str);
var fullStr=path.join(__dirname,str);
console.log(fullStr);