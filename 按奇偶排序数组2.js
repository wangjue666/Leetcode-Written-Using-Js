var sortArrayByParityII = function(A) {
    var i = 0,j = 1,tmp;
    var len = A.length;
    while(i<len && j<len){
        if (A[i] % 2 == 1 && A[j] % 2 == 0) {//奇偶
            tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
            i += 2;
			j += 2;
        }else if(A[i] % 2 == 1){//奇奇
            j += 2;
        }else{//偶偶
            i += 2;
        }  
    }  
    return A;
};