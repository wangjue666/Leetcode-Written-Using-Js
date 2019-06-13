var peakIndexInMountainArray = function(A) {
    let l=0,r=A.length-1;m=0;
    while(l<=r){
        m = parseInt((l + r)/2);
        if (A[m] > A[m - 1] && A[m] > A[m+1]) {
            return m;
        } else if (A[m] > A[m - 1] && A[m] < A[m + 1]) {
            l = m+1;
        } else if (A[m] < A[m - 1] && A[m] > A[m + 1]) {
            r = m-1;
        }
    }
    return -1
};

