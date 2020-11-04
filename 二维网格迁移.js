var shiftGrid = function (grid, k) {
    let m = grid.length
    let n = grid[0].length
    k = k % (m * n)
    for (let i = 0; i < k; i++) {
        let tmp = grid[m - 1][n - 1]
        for (let j = m-1; j >= 0; j--) {
            for (let r = n-1; r >=0; r--) {
                if(r== n-1 && j==m-1){
                    continue
                }
                let item = grid[j][r]
                if(r != n-1){
                    grid[j][r+1] = item
                }else{
                    grid[j+1][0] = item
                }
            }
        }
        grid[0][0] = tmp
    }
    return grid
};