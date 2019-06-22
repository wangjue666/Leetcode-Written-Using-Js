var insertIntoMaxTree = function(root, val) {
    if(root==null){
        return new TreeNode(val);
    }
    if(root.val<val){
        let res=new TreeNode(val);
        res.left = root;
        return res;
    }else{
        root.right = insertIntoMaxTree(root.right, val);
        return root;
    }
};


class Solution {
    public TreeNode insertIntoMaxTree(TreeNode root, int val) {
        if(root == null){
            return new TreeNode(val);
        }
        if(root.val < val){
            TreeNode res = new TreeNode(val);
            res.left = root;
            return res;
        }else{
            root.right = insertIntoMaxTree(root.right, val);
            return root;
        }
    }
}