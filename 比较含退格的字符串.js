var backspaceCompare = function(S, T) {
    function formatStr(s){
        let res=[]
        for(let char of s){
            if(char!=='#'){
                res.push(char)
            }else{
                res.pop();
            }
        };
        return res.join('');
    }

    return formatStr(S)==formatStr(T);
};



const formatStr = s => {
    const result = [];
    
    for(let char of s) {
        if(char !== '#') {
            result.push(char);
        } else {
            result.pop();
        }
    }
    
    return result.join('');
}
var backspaceCompare = function(S, T) {
    return formatStr(S) === formatStr(T)
};
