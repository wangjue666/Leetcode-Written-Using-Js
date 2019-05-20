var diameterOfBinaryTree = function(root) {
    if(root==null){
        return 0;
    }
    return Math.max(Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right)), getHeight(root.left)+getHeight(root.right));

    function getHeight(root){
        if(root == null){
            return 0;
        }
        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    }
};


class Solution {
    public int diameterOfBinaryTree(TreeNode root) {
        if(root == null)
            return 0;
        return Math.max(Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right)), getHeight(root.left)+getHeight(root.right));
    }
    private int getHeight(TreeNode root) {
        if(root == null)
            return 0;
        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    }
}