var solution = function(isBadVersion) {
    return function(n) {
        let left = 1,right=n,mid;
        while(left<right){
            //防止溢出
            mid = parseInt(left+(right-left)/2);
            if(isBadVersion(mid)){
                right=mid;
            }else{
                left=mid+1;
            }
        }
        return right;
    };
};