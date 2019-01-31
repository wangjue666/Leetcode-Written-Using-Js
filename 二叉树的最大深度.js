var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }else{
        let left_height = maxDepth(root.left);
        let right_height = maxDepth(root.right);
        return Math.max(left_height, right_height) + 1;
    }
};