var sortedSquares = function(A) {
    const N=A.length;
    let j=0;
    while(j<N&&A[j]<0){
        j+=1
    }
    let i=j-1;
    let ans = [];
    while(0<=i&&j<N){
        if(A[i]*A[i] < A[j]*A[j]){
            ans.push(A[i]*A[i]);
            i-=1;
        }else{
            ans.push(A[j]*A[j])
            j+=1
        }
    }
    while(i>=0){
        ans.push(A[i]*A[i])
        i-=1
    }
    while(j<N){
        ans.push(A[j]*A[j])
        j+=1
    }
    return ans
};


