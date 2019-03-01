var toHex = function(num) {
    if(num==0) return '0';
    let hex='0123456789abcdef',ans='';
    while(num&&ans.length<8){
        ans=hex[num&0xf]+ans;
        num>>=4;
    }
    return ans;
};

