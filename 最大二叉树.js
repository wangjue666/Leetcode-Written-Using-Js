
var constructMaximumBinaryTree = function(nums) {
    const findMaxIndex = nums => nums.indexOf(Math.max(...nums))
    if(nums.length === 0) {
        return null;
    }
    const index = findMaxIndex(nums);
    const current = new TreeNode(nums[index]);

    current.left = constructMaximumBinaryTree(nums.slice(0, index));
    current.right = constructMaximumBinaryTree(nums.slice(index + 1));

    return current;
    
};