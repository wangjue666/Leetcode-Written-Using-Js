var flipAndInvertImage = function(A) {
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[i].length;j++){
            if(A[i][j]==1){
                A[i][j]=0;
            }else{
                A[i][j]=1;
            }
           
        }
        A[i]=A[i].reverse();
    }
    
    return A;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))