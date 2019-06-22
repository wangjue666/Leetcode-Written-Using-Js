

Solution.prototype.pick = function(target) {
    let count = 1;
    let index = 0;
    for (let i = 0; i < this.nums.length; i++) {
        if (target == this.nums[i]) {
            if (Math.random() < 1 / count) {
                index = i;
            }
            count++;
        }
    }
    return index;
};