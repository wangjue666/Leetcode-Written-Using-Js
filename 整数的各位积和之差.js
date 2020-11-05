var subtractProductAndSum = function(n) {
    let arr = n.toString().split('')
    let product = arr.reduce((pre, cur) => pre * cur, 1);
    let sum = arr.reduce((pre,cur)=>Number(pre) + Number(cur), 0 );
    return product - sum
};


console.log(subtractProductAndSum(234))