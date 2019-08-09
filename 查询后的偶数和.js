var sumEvenAfterQueries = function(A, queries) {
    let num = 0;
    let target =[]
    A.forEach(it=>{
        if(it%2 == 0){
            num +=it;
        }
    })
    A.forEach((it,k)=>{
        let x =A[queries[k][1]];
        let y = x + queries[k][0];
            A[queries[k][1]] =y;
        if(x%2 == 0){
            num -=x;
        }
        if(y%2 == 0){
            num +=y
        }
        target.push(num)
    })
    return target;
};