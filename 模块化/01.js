//测试加载此模块是否执行文件中所有的代码
console.log("abc");
console.log(123);
let username="zs";
function sayHello(){
    console.log("Hello World!");
}
module.exports={
    username,
    sayHello
}
