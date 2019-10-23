var isToeplitzMatrix = function(matrix) {
    let col_len = matrix.length
    let row_len =  matrix[0].length
    if (col_len == 1 || row_len == 1){
        return true
    }
    for(let i=0; i<col_len-1; i++){
        for(let j=0; j<row_len-1; j++){
            if(matrix[i][j] !== matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true
};
