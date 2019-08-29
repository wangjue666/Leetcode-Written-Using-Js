var minimumDeleteSum = function(s1, s2) {
    const memo = [...Array(s1.length)].map(()=>{return new Array(s2.length)});
    var getCodeSum = function(s, idx){
        var sum = 0 ;
        for(let i = idx ; i< s.length; i++){
            sum+=s.charCodeAt(i);
        }
        return sum;
    }
    var findMinDeleteCode = function(i1, i2){
        if(i1==s1.length)return getCodeSum(s2, i2);
        if(i2 == s2.length)return getCodeSum(s1, i1);
        if(memo[i1][i2])return memo[i1][i2];
        memo[i1][i2] = Math.min(s1.charCodeAt(i1)+findMinDeleteCode(i1+1, i2), s2.charCodeAt(i2)+findMinDeleteCode(i1, i2 + 1), s1[i1]==s2[i2]?findMinDeleteCode(i1+1, i2+1):Infinity);
        return memo[i1][i2];
    }   
    return findMinDeleteCode(0, 0);
    console.log(memo);
};
let s1 = "sea", s2 = "eat"

minimumDeleteSum(s1,s2)
var minimumDeleteSum2 = function(s1, s2) {
    const memo = [...Array(s1.length)].map(()=>{return new Array(s2.length)});
    var getCodeSum = function(s, idx){
        var sum = 0 ;
        for(let i = idx ; i< s.length; i++)sum+=s.charCodeAt(i);
        return sum;
    }    
    var findMinDeleteCode = function(i1, i2){
        if(i1==s1.length)return getCodeSum(s2, i2);
        if(i2 == s2.length)return getCodeSum(s1, i1);
        if(memo[i1][i2])return memo[i1][i2];
        memo[i1][i2] = Math.min(s1.charCodeAt(i1)+findMinDeleteCode(i1+1, i2), s2.charCodeAt(i2)+findMinDeleteCode(i1, i2 + 1), s1[i1]==s2[i2]?findMinDeleteCode(i1+1, i2+1):Infinity);
        return memo[i1][i2];
    }
    return findMinDeleteCode(0, 0);
    
};