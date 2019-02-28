var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        if((s.indexOf(s[i])==s.lastIndexOf(s[i]))&&s.indexOf(s[i])!=-1){
            return s.indexOf(s[i])
        }
    }
    return -1;
};