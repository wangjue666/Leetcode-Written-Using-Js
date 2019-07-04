var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let memo = [];
    for (let i = 0; i < m; i++) {
        memo[i] = [];
    }  
    return dp(grid, m, n, memo);


    function dp(grid,m,n,memo){
        memo[0][0] = grid[0][0];
        for(let i=1;i<m;i++){
            memo[i][0]=grid[i][0]+memo[i-1][0];
        }
        for (let i=1;i<n;i++) {
            memo[0][i]=grid[0][i]+memo[0][i - 1];
        }
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                memo[i][j] = grid[i][j] + Math.min(memo[i - 1][j], memo[i][j - 1])
            }
        }
        return memo[m - 1][n - 1]
    }
};

let grid=[
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ];
minPathSum(grid)
var func = function (grid, m, n, memo) {
    // 3. 动态规划
    memo[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        memo[i][0] = grid[i][0] + memo[i - 1][0]
    }
    for (let i = 1; i < n; i++) {
        memo[0][i] = grid[0][i] + memo[0][i - 1]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[i][j] = grid[i][j] + Math.min(memo[i - 1][j], memo[i][j - 1])
        }
    }

    return memo[m - 1][n - 1]
}

