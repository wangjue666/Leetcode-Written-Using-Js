var numDecodings = function(s) {
    let dp=[],i=0;
    if(s.length==0||s[i]==0){
        return 0;
    }
    dp[i]=1;
    for(let j=i+1;j<s.length;j++){
        if(s[j]==0&&s[j-1]==0||s[j]==0&&s[j-1]*10>26){
            return 0;
        }
        if(s[j]==0||s[j+1]==0){
            dp[j]=dp[j-1];
        }else{
            if((s[j]/1+s[j-1]*10)<=26&&s[j-1]!=0){
                if(j-2<0){
                    dp[j]=2;
                }else{
                    dp[j]=dp[j-1]+dp[j-2];
                }        
            }else{
                dp[j]=dp[j-1];
            }
        }
    }
    return dp[s.length-1];
}



var numDecodings = function(s) {
    var dp=[],i=0;
    if(s.length===0||s[i]==0){
        return 0;
    }
    dp[i]=1;
    for(var ii=i+1;ii<s.length;ii++){
        if(s[ii]==0&&s[ii-1]==0||s[ii]==0&&s[ii-1]*10>26){
            return 0;
        }
        if(s[ii]==0||s[ii+1]==0){
            dp[ii]=dp[ii-1];
        }else{
            if((s[ii]/1+s[ii-1]*10)<=26&&s[ii-1]!=0){
                if(ii-2<0)
                    dp[ii]=2;
                else
                    dp[ii]=dp[ii-1]+dp[ii-2];
            }else{
                dp[ii]=dp[ii-1];
            }
        }
    }
    return dp[s.length-1];
};