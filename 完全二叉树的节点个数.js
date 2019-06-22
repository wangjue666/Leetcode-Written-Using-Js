var countNodes = function(root) {
    let count=0;
    recursion(root);
    function recursion(root){
        if(root==null){
            return 0;
        }
        count++;
        recursion(root.left);
        recursion(root.right);
        return count;
    }
    return count;
};

class Solution {
    int count = 0;
    public int countNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }
        count++;
        countNodes(root.left);
        countNodes(root.right);
        return count;
    }
}
