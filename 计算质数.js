var countPrimes = function(n) {
    let count=0;
    for(let i=2;i<n;i++){
       if(isPrime(i)){
           console.log(i)
           count++;
       }
    }
    function isPrime(number){
        for(let i=2;i<=number/2;i++){
            if(number%i===0){
                return false
            }
        }
        return true;
    }
    return count;
};


var countPrimes2 = function(n) {
    if(n < 2) return 0;
    let count = 0;

    //基于埃拉托斯特尼筛法
    for(let d = 2; d < n; d++){

        if (d <= 3 && d > 1) { count++; continue; }
        if (d % 2 == 0 || d % 3 == 0) { continue; }
        let nonPrime = 0;
        for (let i = 5; i * i <= d; i += 6) {
            if (d % i == 0 || d % (i + 2) == 0) { nonPrime = 1; break; }
        }
        if(!nonPrime) count++;
    }

    return count;
};