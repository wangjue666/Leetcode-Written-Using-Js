var isSubtree = function(s, t) {
    
    function dfs(s){
        if(!s){
            return false;
        }
        if(!isEqual(s,t)){
            return dfs(s.left) || dfs(s.right);
        }
        return true;
    }
    function isEqual(s,t){
        if(!s && !t){
            return true;
        } 
        if(!t || !s){
            return false;
        } 
        if(s.val !== t.val){
            return false;
        }
        return isEqual(s.left, t.left) && isEqual(s.right, t.right);
    }

    return dfs(s);
};
var isSubtree = function(s, t) {
    //将s的每一个节点与t进行比较
    function dfs(s){
        if(!s) return false;
        if(!isEqual(s, t)){
            return dfs(s.left) || dfs(s.right);
        }
        return true;
    }
    function isEqual(s, t){
        if(!s && !t) return true;
        if(!t || !s) return false;
        if(s.val !== t.val){
            return false;
        }
        return isEqual(s.left, t.left) && isEqual(s.right, t.right);
    }
    return dfs(s);
};