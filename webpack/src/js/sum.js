exports.count=function (...arg){
    var res=arg.reduce((p,c)=>{
        return p+c;
    },0);
    return res;
}