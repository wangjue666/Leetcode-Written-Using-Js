var trimBST = function(root, L, R) {
    if(root == null){
        return null;
    }       
    root.left = trimBST(root.left,L,R);
    root.right = trimBST(root.right,L,R);
    if( L > root.val || root.val > R)
        root = root.right != null ? root.right : root.left; //右节点上移或者左节点
    return root;
};