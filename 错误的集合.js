var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b);
    var n = nums.length;
    var sum = (n + 1) * n / 2;
    var repeat = 0;
    for(var i=0;i<n;i++){
        if(nums[i-1] === nums[i]){
            repeat = nums[i];
        }
        sum -= nums[i];
    }
    return [repeat, sum + repeat];
};
