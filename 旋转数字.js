var rotatedDigits = function(N) {
    let count = 0;
    for(let i = 0; i <= N; i++) {
        let num = i + '';
        if (!/[347]/g.test(num) && /[2569]/g.test(num)) {
            count++;
        }
    }
    return count;
};

console.log(/[347]/g.test(36))