var increasingBST = function(root) {
    const tree = new TreeNode(null);
    let current = tree;
    
    const visit = val => {
        current.right = new TreeNode(val);
        current = current.right
    };
    
    const dfs = node => {
        if(node === null) {
            return;
        }
        dfs(node.left);
        visit(node.val)
        dfs(node.right);
    }
    
    dfs(root);
    
    return tree.right;
};