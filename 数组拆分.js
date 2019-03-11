var arrayPairSum = function(nums) {
    let res=0;
    nums.sort((a,b)=>{
        return a-b
    });
    for(let i=0;i<nums.length;i+=2){
        res+=nums[i]
    }
    return res;
};
var arrayPairSum2 = function(nums) {
    return nums.sort((left, right) => left - right)
        .filter((_, i) => i % 2 === 0)
        .reduce((prev, item) => prev + item)
};


console.log(arrayPairSum([6214, -2290, 2833, -7908]))