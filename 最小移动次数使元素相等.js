var minMoves = function(nums) {
    let sum=0,minval=9999999999999999;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(minval > nums[i]){
            minval = nums[i];
        }
    }
    return sum - minval*nums.length;
};

console.log(minMoves([1,2,3]))