var NumArray = function(nums) {
    this.nums=nums;
};

NumArray.prototype.sumRange = function(i, j) {
    let sum=0;
    for(;i<=j;i++){
        sum+=this.nums[i];
    }
    return sum;
};
