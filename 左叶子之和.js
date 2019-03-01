var sumOfLeftLeaves = function(root) {
    if(root==null) return 0;
    if (root.left == null && root.right == null) return 0
    let left = sumLeaves(root.left);
    if (root.left != null && root.left.left == null && root.left.right == null) {
        left = left == 0 ? root.left.val : left
    }
    let right = sumLeaves(root.right)
    return left + right;
};
var sumLeaves = function(root) {
    if (root == null) return 0
    if (root.left == null && root.right == null) {
        return 0
    }
    if (root.left != null && root.left.left == null && root.left.right == null) {
        return root.left.val + sumLeaves(root.right)
    }
    return sumLeaves(root.left) + sumLeaves(root.right)
}
