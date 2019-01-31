var largestPerimeter = function(A) {
    A.sort((a,b)=>{
        return a-b;
    })
    for (let i = A.length - 3; i >= 0; --i){
        if (A[i] + A[i+1] > A[i+2]){
            return A[i] + A[i+1] + A[i+2];
        }
    }      
    return 0;
};


console.log(largestPerimeter([1,2,3,5,6]));