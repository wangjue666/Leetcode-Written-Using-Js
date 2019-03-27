var getMinimumDifference = function(root) {
    const result=[];
    const dfs=node=>{
        if(!node){
            return;
        }
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    
    const res = [];
    result.reduce((a,b)=>{
        res.push(Math.abs(a - b));
        return b;
    })
    return Math.min(...res);
};

let result=[1,2,3,4,6];
let res=[];
result.reduce((a,b)=>{
    console.log(a,b)
    res.push(Math.abs(a - b));
    return b;
})
console.log(res);