var containsNearbyDuplicate = function(nums, k) {
    if(nums.length==0){
        return false;
    }
    if(k>nums.length){
        k=nums.length;
    }
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<=(i+k);j++){
            if(nums[i]==nums[j]){
                return true;
            }
        }
        
    }

    return false;
};

console.log(containsNearbyDuplicate([1,0,1,1],1))