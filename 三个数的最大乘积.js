var maximumProduct = function(nums) {
    let len=nums.length;
    nums.sort((a,b)=>{
        return a-b;
    })
    return Math.max(nums[0]*nums[1]*nums[len-1],nums[len-1]*nums[len-2]*nums[len-3])
};

console.log(maximumProduct([-1,0,-2,-5,3,4]))