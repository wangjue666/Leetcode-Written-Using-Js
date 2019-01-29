
var maxSubArray = function(nums) {
    let res=nums[0];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(sum>0){
            sum+=nums[i];
        }else{
            sum=nums[i];
        }
        res=res>sum?res:sum;  
    }
    return res;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


// public int maxSubArray(int[] nums) {
//     int res = nums[0];
//     int sum = 0;
//     for (int num : nums) {
//         if (sum > 0)
//             sum += num;
//         else
//             sum = num;
//         res = Math.max(res, sum);
//     }
//     return res;
// }

// int maxSubArray(int* nums, int numsSize) {
//     if (numsSize == 0) {
//         return 0;
//     }
    
//     // 一段一段的子数列的和
//     int sum = nums[0];
//     int res = nums[0];
//     // 动态规划的题
//     for (int i = 1; i < numsSize; i++) {
//         if (sum > 0) {
//             // 前面累加的增长 > 0 那就加上我自己再看看
//             sum +=nums[i];
//         } else {
//             // 前面累加的增长 < 0  前面的所有累加的增长都白干了，那就从这一次开始看后面的吧
//             sum = nums[i];
//         }
//         // sum就等于从前面某一天到今天的增长
//         if (sum > res) {
//             res = sum;
//         }
//     }
    
//     return res;
// }