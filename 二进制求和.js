var addBinary = function (a, b) {
    let [sum, step] = ["", 0];
    let [lga, lgb] = [a.length - 1, b.length - 1];
    let temp = 0;
    for (let i = 0; a[lga - i] || b[lgb - i]; i++) {
        temp = Number(a[lga - i] || 0) + Number(b[lgb - i] || 0) + step;
        if (temp >= 2) {
            sum = temp % 2 + sum;
            step = 1;
        } else {
            sum = temp + sum;
            step = 0;
        }
    }
    return step > 0 ? step + sum : sum;
};