var pruneTree = function(root) {
    if(root==null){
        return root;
    }
    root.left=pruneTree(root.left);
    root.right=pruneTree(root.right);
    if(root.left==null&&root.right==null&&root.val==0){
        root=null;
    }
    return root;
};

def pruneTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if root == None:
            return root
        root.left = self.pruneTree(root.left)
        root.right = self.pruneTree(root.right)
        if root.left == None and root.right == None and root.val == 0:
            root = None
        return root
