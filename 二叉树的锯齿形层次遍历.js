var zigzagLevelOrder = function(root) {
    let res=[];
    helper(res, root, 0);
    return res;
    function helper(res,root,depth){
        if (root == null){
            return;
        }
        if(res.length == depth){
            res.push([]);
        }
        if (depth % 2 == 0){
            res[depth].push(root.val);
        }else{
            res[depth].unshift(root.val);
        }
        helper(res, root.left, depth + 1);
        helper(res, root.right, depth + 1);
    }
};

