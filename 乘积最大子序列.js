var maxProduct = function(nums) {
    let max=-999999999999999,imax=1,imin=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i] < 0){ 
            let tmp = imax; 
            imax = imin; 
            imin = tmp;
        }
        imax = Math.max(imax*nums[i], nums[i]);
        imin = Math.min(imin*nums[i], nums[i]);
        max = Math.max(max, imax);
    }
    return max;
};


