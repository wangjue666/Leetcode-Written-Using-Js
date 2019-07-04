var singleNumber = function(nums) {
    let a=0,b=0;
    for(let i=0;i<nums.length;i++){
        b=(b^nums[i])& ~a;
        a=(a^nums[i])&~b;
    }
    return b;
};

int singleNumber(vector<int>& nums) {
    int a = 0, b = 0;
    for (auto x : nums) {
        b = (b ^ x) & ~a;
        a = (a ^ x) & ~b;
    }
    return b;
}

public int singleNumber(int[] nums) {
    int one = 0, two = 0, three;
    for (int num : nums) {
        // two的相应的位等于1，表示该位出现2次
        two |= (one & num);
        // one的相应的位等于1，表示该位出现1次
        one ^= num;
        // three的相应的位等于1，表示该位出现3次
        three = (one & two);
        // 如果相应的位出现3次，则该位重置为0
        two &= ~three;
        one &= ~three;
    }
    return one;
}