var fairCandySwap = function(A, B) {
    let sA=A.reduce((prev,curr)=>{return prev+curr});
    let sB=B.reduce((prev,curr)=>{return prev+curr});
    let setB=new Set(B);
    for(x in A){
        if(setB.has((A[x]+(sB-sA)/2))){
            return [A[x],A[x]+(sB-sA)/2]
        }
    }
};


console.log(fairCandySwap([1,1],[2,2]))