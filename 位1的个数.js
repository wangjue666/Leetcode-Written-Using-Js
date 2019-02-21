var hammingWeight = function(n) {
    var count = 0;
    while(n){
        ++count;
        n = (n - 1) & n;
    }
    return count;
};