var reverseBits = function(n) {
    var newN = 0, count = 0;
    while (count <= 31) {
        if (count <= 30) {
            newN += ((n & 1) << (30-count) )*2
        } else {
            newN += (n & 1) 
        }
        n >>= 1;
        count++;
    }
    return newN
};

