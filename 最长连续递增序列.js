var findLengthOfLCIS = function(nums) {
    if(nums.length==0){
        return 0;
    }
    let sum=1;
    let max=sum;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            sum++;
            max = max>sum?max:sum;
        }else{
            sum=1;
        }
    }
    return max;
};

