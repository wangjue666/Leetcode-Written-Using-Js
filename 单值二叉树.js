var isUnivalTree = function(root) {
    return isUnival(root,root.val);

    function isUnival(root,val){
        if(root == null){
            return true;
        }
        if(root.val == val && isUnival(root.left,val) && isUnival(root.right,val)){
            return true;
        }else{
            return false;
        }
    }
};
