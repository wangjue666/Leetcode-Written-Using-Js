var threeSumClosest = function(nums, target) {
    nums.sort((n1,n2)=>n1-n2);
    let closestNum=nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length-2;i++){
        let l = i + 1, r = nums.length - 1;
        while (l < r){
            let threeSum = nums[l] + nums[r] + nums[i];
            if (Math.abs(threeSum - target) < Math.abs(closestNum - target)) {
                closestNum = threeSum;
            }
            if (threeSum > target) {
                r--;
            } else if (threeSum < target) {
                l++;
            } else {
                // 如果已经等于target的话, 肯定是最接近的
                return target;
            }

        }
    }
    return closestNum;
};

