const find = nums => {
    if(nums.length === 0) return [[]];
    const last = find(nums.slice(0, nums.length - 1));
    let res=[...last, ...last.map(item => [...item, nums[nums.length - 1]])];
    return res;
}

const sort = nums => nums.sort((a, b) => a - b);

var subsetsWithDup = function(nums) {
    const maped = find(sort(nums))
        .map(item => (item).join('|'));
    return [...new Set(maped)].map(item => item === '' ? [] : item.split('|').map(num => +num))
};

subsetsWithDup([1,2,2,3])