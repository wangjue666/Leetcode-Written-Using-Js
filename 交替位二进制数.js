
var hasAlternatingBits = function(n) {
    let str=n.toString(2);
    let bSame=false;
    for(let i=1;i<str.length;i++){
        if(str[i]==str[i-1]){
            bSame=true;
            break;
        }
    }
    return !bSame;
};
hasAlternatingBits(5);