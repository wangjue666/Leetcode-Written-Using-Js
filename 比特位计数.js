var countBits = function(num) {
    let dp=new Array(num+1);
    for(let i=0;i<=num/2;i++){
        dp[i*2] = dp[i]||0;
        if(i*2+1 <= num){
            dp[i*2+1] = dp[i] + 1;
        }
    }
    return dp;
};
对于一个二进制数来说，
如果它的最低位为1(%2 为 1）,
则它与 n/2 的 1 个数相差1。 
如果它的最低位为 0，
则它与 n/2 的 1 个数相同 
