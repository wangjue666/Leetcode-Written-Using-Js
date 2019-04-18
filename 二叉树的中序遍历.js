var inorderTraversal = function(root) {
    let res=[];
    if(root){
        t(root);
        return res;
    }else{
        return res;
    }

    function t(root){
        if(root.left){
            t(root.left);
        }
        res.push(root.val);
        if(root.right){
            t(root.right);
        }
    }
};
