var uncommonFromSentences = function(A, B) {
    let newStr=(A+' '+B).split(' ');
    let count={};
    let res=[];
    for(let i=0;i<newStr.length;i++){
        if(count[newStr[i]]){
            count[newStr[i]]+=1;
        }else{
            count[newStr[i]]=1;
        }
    }
    for(let k in count){
        if(count[k]==1){
            res.push(k)
        }
    }
    return res;
};

let A = "this apple is sweet",
B = "this apple is sour"
console.log(uncommonFromSentences(A,B))

