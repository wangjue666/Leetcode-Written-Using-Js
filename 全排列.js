var permute = function(nums) {
    let res = []
  
    const dp = (arr, nums) => {
      
      if (nums.length == 0) {
        res.push(arr)
        return
      }
      for (let i = 0; i < nums.length; i++) {
        dp([...arr, nums[i]], nums.slice(0, i).concat(nums.slice(i + 1)))
      }
    }
    dp([], nums)
    return res
}
  
permute([1,2,3])
