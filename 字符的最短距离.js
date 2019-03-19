var shortestToChar = function(S, C) {
    const arr=[],result=[];
    for(let i=0;i<S.length;i++){
        if(S[i]==C){
            arr.push(i);
        }
    }
    [...S].forEach((item,index)=>{
        if(item==C){
            result.push(0);
        }else{
            let min=99999;
            arr.forEach(ci=>{
                if(min>Math.abs(index-ci)){
                    min=Math.abs(index-ci)
                }
            })
            result.push(min)
        }
    })
    
    return result;
};
let S = "loveleetcode", C = 'e'
console.log(shortestToChar(S,C))
