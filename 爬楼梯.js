
var climbStairs = function(n) {
    let x1=0,x2=1;
    let sum=0;
    for(let i=0;i<n;i++){
        sum=x1+x2;
        x1=x2;
        x2=sum;
        console.log(`第${i}次sum is`,sum)
    }
    return sum;
};

console.log(climbStairs(6))

-111111
-222
-1221
-2121
-2211
-1122
-1212
-11112
-21111
-12111
-11211
-11121
-2112