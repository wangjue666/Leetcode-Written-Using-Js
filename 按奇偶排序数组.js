var sortArrayByParity = function(A) {
    let l=0,r=A.length-1;
    while(l<r){
        if(A[l]%2==1&&A[r]%2==0){
            let tem=A[l];
            A[l]=A[r];
            A[r]=tem;
            l++;
            r--;
        }else if(A[l]%2==0){
            l++;
        }else if(A[r]%2==1){
            r--;
        }     
    }
    return A;
};

console.log(sortArrayByParity([3,5,1,2,3,4]))