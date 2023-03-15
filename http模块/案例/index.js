const fs=require("fs");
fs.readFile("./第1章.html","utf8",(err,data)=>{
    if(err) return console.log("读取失败",err.message);
    let sm=/<style>[\s\S]*<\/style>/g;
    let str=data.match(sm)[0].replace("<style>","").replace("</style>","");
    fs.writeFile("./a.css",str,"utf8",(err)=>{
        if(err) return console.log("写入失败");
        console.log("写入成功");
    })
})

fs.readFile("./第1章.html","utf8",(err,data)=>{
    if(err) return console.log("读取失败",err.message);
    let sm=/<script>[\s\S]*<\/script>/g;
    let str=data.match(sm)[0].replace("<script>","").replace("</script>","");
    fs.writeFile("./a.js",str,"utf8",(err)=>{
        if(err) return console.log("写入失败");
        console.log("写入成功");
    })
})

fs.readFile("./第1章.html","utf8",(err,data)=>{
    if(err) return console.log("读取失败",err.message);
    let sm=/<!DOCTYPE html>[\s\S]*<\/html>/g;
    let str=data.match(sm)[0].replace(/<script>[\s\S]*<\/script>/g,"<script src='./a.js'><\/script>").replace(/<style>[\s\S]*<\/style>/g,"<link rel='stylesheet' href='./a.css'>");
    fs.writeFile("./a.html",str,"utf8",(err)=>{
        if(err) return console.log("写入失败");
        console.log("写入成功");
    })
})