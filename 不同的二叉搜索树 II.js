var generateTrees = function(n) {
    if(n==0){
        return [];
    }
    const catched={
        '0-0':[null]
    }
    const generate=(n,base)=>{
        if(catched[`${n}-${base}`]) {
            return  catched[`${n}-${base}`];
        }
        if(n === 0) return [null];
        const current = [];
        for (const key of Array(n).keys()) {
            let leftSet = generate(key, base);
            let rightSet = generate(n - key - 1, key + 1 + base);
            for (const left of leftSet) {
                for (const right of rightSet) {
                    const root = new TreeNode(key + 1 + base);
                    root.left = left;
                    root.right = right;
                    current.push(root);
                }
            }
        }
        catched[`${n}-${base}`] = current;
        return current;
    }

    return generate(n, 0);
};



var generateTrees = function(n) {
    if(n === 0) return [];

    const cached = {
        '0-0': [null]
    };

    const generate = (n, base) => {
        if(cached[`${n}-${base}`]) return cached[`${n}-${base}`];

        if(n === 0) return [null];
        const current = [];
        for (const key of Array(n).keys()) {
            let leftSet = generate(key, base);
            let rightSet = generate(n - key - 1, key + 1 + base);

            for (const left of leftSet) {
                for (const right of rightSet) {
                    const root = new TreeNode(key + 1 + base);
                    root.left = left;
                    root.right = right;
                    current.push(root);
                }
            }
        }
        cached[`${n}-${base}`] = current;
        return current;
    }
   return generate(n, 0);
};