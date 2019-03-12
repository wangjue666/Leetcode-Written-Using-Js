var findTarget = function(root, k) {
    //tranverse, and put them into hash. check if it has a cooperator in hash
    var findTargetFromHash = function(root, k, hash) {
        if(root == null) return false;
        
        let remainder = k - root.val;
        if(hash.hasOwnProperty(remainder)) return true;
        else hash[root.val] = true;
        
        return findTargetFromHash(root.left, k, hash) || findTargetFromHash(root.right, k, hash);
    }
    return findTargetFromHash(root, k, {});
};