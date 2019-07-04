var isCousins = function(root, x, y) {
    let depth=new Map(),parent=new Map();
    dfs(root, null);
    return (depth.get(x) == depth.get(y) && parent.get(x) != parent.get(y));

    function dfs(node,par){
        if(node!=null){
            depth.set(node.val, par != null ? 1 + depth.get(par.val) : 0);
            parent.set(node.val, par);
            dfs(node.left, node);
            dfs(node.right, node);
        }
    }
};

class Solution {
    Map<Integer, Integer> depth;
    Map<Integer, TreeNode> parent;

    public boolean isCousins(TreeNode root, int x, int y) {
        depth = new HashMap();
        parent = new HashMap();
        dfs(root, null);
        return (depth.get(x) == depth.get(y) && parent.get(x) != parent.get(y));
    }

    public void dfs(TreeNode node, TreeNode par) {
        if (node != null) {
            depth.put(node.val, par != null ? 1 + depth.get(par.val) : 0);
            parent.put(node.val, par);
            dfs(node.left, node);
            dfs(node.right, node);
        }
    }
}

