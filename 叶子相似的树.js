var leafSimilar = function(root1, root2) {
    let arr = [];
    let arr2 = [];
    let trace=(root,arr)=>{
        if (root === null) {
            return null
        }
        trace(root.left, arr);
        trace(root.right, arr);
        if (root.left === null && root.right === null) {
            arr.push(root.val)
        }    
    }
    trace(root1, arr)
    trace(root2, arr2)
    for (let i = 0;i<arr.length;i++) {
        if (arr[i]!==arr2[i]) {
            return false
        }
    }
    return true
};
var leafSimilar = function(root1, root2) {
    let arr = [];
    let arr2 = [];
    let trace = (root, arr) => {
        if (root === null) {
            return null
        }
        trace(root.left, arr)
        if (root.left === null && root.right === null) {
            arr.push(root.val)
        }
        trace(root.right, arr)
        
    }
    trace(root1, arr)
    trace(root2, arr2)
    for (let i = 0;i<arr.length;i++) {
        if (arr[i]!==arr2[i]) {
            return false
        }
    }
    return true
    
};