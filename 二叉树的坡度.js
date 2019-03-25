var findTilt = function(root) {
    let tilt = 0;
    const find=node=>{
        if(!node) return 0;
        const left=find(node.left);
        const right=find(node.right);
        tilt += Math.abs(left - right);
        return left + right + node.val;
    }
    find(root);
    return tilt;
};

const findTilt = root => {
    let tilt = 0;
    const find = node => {
        if(!node) return 0;
        const left = find(node.left);
        const right = find(node.right);
        
        tilt += Math.abs(left - right)
        return left + right + node.val;
    };
    
    find(root);
    
    return tilt;
};