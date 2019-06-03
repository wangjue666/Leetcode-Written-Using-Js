var fourSumCount = function(A, B, C, D) {
    const record={};
    for(let i=0;i<C.length;i++){
        for(let j=0;j<D.length;j++){
            if(record[C[i]+D[j]]){
                record[ C[i] + D[j] ]++
            }else{
                record[ C[i] + D[j] ] = 1
            }
        }
    }
    console.log(record)
    let res=0;
    for(let i=0;i<A.length;i++){
        for(let j=0;j<B.length;j++){
            if (record[0 - A[i] - B[j]]){
                res += record[0 - A[i] - B[j]]
            }
        }
    }
    return res;
};

fourSumCount([1,2],
    [-2,-1],
    [-1,2],
    [0,2])

