var transpose = function(A) {
    var result = [];
    for(var k=0; k<A[0].length; k++ ){
        result[k] = [];
    }
    for(var i=0;i<A.length;i++){
        for(var j=0;j<A[i].length;j++){
            result[j][i] = A[i][j];
        }      
    }
    return result;
};
console.log(transpose([[1,2,3],[4,5,6]]))

