var partitionLabels = function(S) {
    let list = [];
    if(S == null || S.length <= 0){
        return list;
    }
    while(S.length > 0){
        S = getSubstring(S);
    }
    return list;

    function getSubstring(str){
        let ch = str.charAt(0);
        let max = str.lastIndexOf(ch);
        for(let i = 1; i < max; i++){
            let chTemp = str.charAt(i);
            let lastTemp = str.lastIndexOf(chTemp);
            max = Math.max(max,lastTemp);
        }
        list.push(max+1);
        return str.substring(max+1,str.length);
    }

};






