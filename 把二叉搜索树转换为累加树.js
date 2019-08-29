var convertBST = function(root) {
    let num=0;
    return deepFunc(root);
    function deepFunc(root){
        if (root != null) {
            deepFunc(root.right);
            root.val = root.val + num;
            num = root.val;
            deepFunc(root.left);
            return root;
        }
        return null;
    }
};

class Solution {
    int num = 0;
 
     public TreeNode convertBST(TreeNode root) {
         if (root != null) {
             //遍历右子树
             convertBST(root.right);
             //遍历顶点
             root.val = root.val + num;
             num = root.val;
             //遍历左子树
             convertBST(root.left);
             return root;
         }
         return null;
     }
 }
 