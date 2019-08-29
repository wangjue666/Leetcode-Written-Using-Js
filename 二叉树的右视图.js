

var rightSideView = function(root) {
    let res=[];
    f(root, 0);
    return res;
    function f(root,i){
        if(root){
            res[i] = root.val;
            f(root.left, i + 1);
            f(root.right, i + 1);
        }
    }
};


class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        d = {}
        def f(root,i):
            if root:
                d[i] = root.val
                f(root.left, i + 1)
                f(root.right, i + 1)
        f(root, 0)
        return list(d.values())