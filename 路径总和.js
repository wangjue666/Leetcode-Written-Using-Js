var hasPathSum = function(root, sum) {
    if (root == null) {
        return false;
    }
    if (root.left == null && root.right == null) {
        return sum - root.val == 0;
    }
    return hasPathSum(root.left, sum - root.val)
        || hasPathSum(root.right, sum - root.val);
};

var hasPathSum2 = function(root, sum) {
    if(root==null){
        return false
    }
    if(root.left==null&&root.right==null){
        return root.val-sum==0;
    }
    return hasPathSum2(root.left,sum-root.val)||hasPathSum2(root.right,sum-root.val)

}