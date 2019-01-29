var isPowerOfTwo = function(n) {
    if(n==1) {
        return true
    }
    while(n>1) {
        n = n/2
        if(n%1>0) {
            return false
        }
    }
    return n==1
};

console.log(isPowerOfTwo(6))