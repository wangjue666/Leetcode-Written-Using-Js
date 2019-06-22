
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const res = [];
    let i = 0;
    while (i < nums.length) {
        let one = nums[i];
        let start = i + 1;
        let end = nums.length - 1;

        while(start<end){
            let sum = one + nums[start] + nums[end];
            if (sum === 0){
                res.push([one, nums[start], nums[end]]);
                start++;
                end--;
                while(start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
                while(start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            }else if(sum>0){
                end--;
            }else{
                start++;
            }
        }

        i++;
        while (i < nums.length && nums[i] === nums[i - 1]){
            i++;
        }
    }
    return res;
};


var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const ret = [];
    let i = 0;
    while (i < nums.length) {
      let one = nums[i];
      let start = i + 1;
      let end = nums.length - 1;
  
      while (start < end) {
        let sum = one + nums[start] + nums[end];
        if (sum === 0) {
          ret.push([one, nums[start], nums[end]]);
          start++;
          end--;
          // 跳过重复值
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (sum > 0) end--;
        else start++;
      }
      i++;
      // 跳过重复值
      while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }
    return ret;
  };