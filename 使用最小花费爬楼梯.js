var minCostClimbingStairs = function(cost) {
    let dp = [];
    for(let i=0;i<cost.length;i++){
        dp[i]=0
    }
  
    console.log(dp)
    dp[1]=Math.min(cost[0], cost[1]);
    for(let i = 2; i < cost.length; i++){
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i - 1]);
    };
    return dp[cost.length - 1];
};

class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] dp = new int[cost.length];
        dp[0] = 0;
        dp[1] = Math.min(cost[0], cost[1]);
        for(int i = 2; i < cost.length; i++){
            dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i - 1]);
        }
        return dp[cost.length - 1];
    }
}