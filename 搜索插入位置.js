var searchInsert = function(nums, target) {
    if(nums.length==0){
        return 0;
    }
    if(nums.indexOf(target)!=-1){
        return nums.indexOf(target);
    }else{
        for(let i=0;i<nums.length;i++){
            if(nums[i]>target){
                return i;
            }
        }
        return nums.length;
    }
};


console.log(searchInsert([1,3,5,6],7))