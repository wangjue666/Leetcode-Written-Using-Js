var lowestCommonAncestor = function(root, p, q) {
    if(root==null){
        return root;
    }
    if (root == p || root == q) {
        return root;
    }
    let left=lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) {
        return root;
    }else if (left != null) {
        return left;
    }else if (right != null) {
        return right;
    }

    return null;
};
