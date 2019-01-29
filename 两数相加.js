
var getSum = function(a, b) {
    let sum=a;
    while (b != 0){
        sum=a^b;//除了进位加   01
                              10   =>3                   
        console.log(sum);
        b=(a&b)<<1;//进位      0
        console.log(b);
        a=sum;
        console.log(a);
    }
    
    return sum;
};


getSum(1,2)