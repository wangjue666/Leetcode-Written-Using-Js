var preorder = function(root) {
    if(!root) return [];
    const res=[];
    let list = [root];
    while(list.length){
        const cur = list.pop();
        res.push(cur.val);
        cur.children && cur.children.reduceRight((cur,item) => {
            list.push(item);
            return list;
        },list)
    }
    return res;
};
