var dominantIndex = function(nums) {
    let max=0,second=0,index=0;
    for(let i=0;i<nums.length;i++){
        if (max < nums[i]){
            second = max;
            max = nums[i];
            index = i;
        }else if (second < nums[i]) {
            second = nums[i];
        }
    }
    if (second != 0 && max / second < 2){
        return -1;
    }
    return index;    
};



