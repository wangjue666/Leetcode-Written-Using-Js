var titleToNumber = function(s) {
    let sum = 0;
    let base = 1;
    
    for (let char of [...s].reverse()) {
        sum += (char.charCodeAt() - 64) * base;
        base *= 26;
    }
    
    return sum;
};

console.log('B'.charCodeAt())