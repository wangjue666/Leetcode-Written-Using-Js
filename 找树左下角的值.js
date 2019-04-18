var findBottomLeftValue = function(root) {
    let max=-999999999999999;
    let res;
    dfs(root, 0);
    return res;
    function dfs(node,depth){
        if(node!=null){
            if(node.left == null && node.right == null){
                if(max < depth){
                    max = depth;
                    res = node.val;
                    console.log(res);
                }
            }
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }
    }
};


class Solution {
    int max = Integer.MIN_VALUE;
    int res;
    public int findBottomLeftValue(TreeNode root) {
        dfs(root, 0);
        return res;
    }
    public void dfs(TreeNode node, int depth){
        if(node != null){
            if(node.left == null && node.right == null){
                if(max < depth){
                    max = depth;
                    res = node.val;
                }
            }
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }
    }
}
