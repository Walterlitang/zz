const fs=require("fs");
fs.readFile("./成绩.txt","utf8",(err,data)=>{
    if(err){
        return console.log("读取失败",err.message);
    }
    var arr=data.split(" ");
    var newArr=[];
    arr.forEach(item=>{
        newArr.push(item.replace("=","："));
    })
    var newStr=newArr.join("\r\n");
    fs.writeFile("./成绩-ok1.txt",newStr,"utf8",(err)=>{
        if(err){
            return console.log("写入失败",err.message);
        }
        console.log("写入成功");
    })
})