var solveNQueens = function(n) {
    const res=[];
    var backtrack=(n,preBlock=[],r=0)=>{
        if(r===n){
            res.push(preBlock.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        }
        for (let c = 0; c < n; c++) {
            if (!preBlock.some((j, k) => j === c || j - c === r - k || j - c === k - r)) {
                preBlock.push(c);
                backtrack(n, preBlock, r + 1);
                preBlock.pop();
            }
        }
    }
    backtrack(n)

    return res;
};
