var majorityElement = function(nums) {
    const record = new Map();
    for (let i = 0; i < nums.length; i++) {
        record.set(nums[i], (record.get(nums[i]) || 0) + 1);
    }
    let res;
    record.forEach((value, key) => {
        if (value > nums.length / 2) {
            res = key;
        }
    })
    return res;
};
