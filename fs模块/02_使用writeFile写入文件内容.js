const fs=require("fs");
fs.writeFile("05.txt","Hello Node.js!","utf-8",function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("写入成功",data);
})