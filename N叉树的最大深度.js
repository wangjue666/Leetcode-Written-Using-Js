

function maxDepth(root) {
    if(root==null){
        return 0
    }
    let depth = 1;
    for(let i=0;i<root.children.length;i++){
        depth = Math.max(maxDepth(root.children[i])+1,depth);
    }
    
    return depth;
}