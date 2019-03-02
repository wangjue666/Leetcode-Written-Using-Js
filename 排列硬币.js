var arrangeCoins = function(n) {
    let num=0;
    for(let i=1;num<=n;i++){
        if(i*(i+1)/2>n){
            return i-1;
        }
    }
};
console.log(arrangeCoins(11))