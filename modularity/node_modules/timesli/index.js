function addZero(n){
    if(n<10){
        return "0"+n;
    }
    return n;
}

function formatTime(time){
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
    var week=time.getDay();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var arr=["天","一","二","三","四","五","六"];
    return `${year}-${month}-${day} ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} 星期${arr[week]}`;
}

exports.formatTime=formatTime;
