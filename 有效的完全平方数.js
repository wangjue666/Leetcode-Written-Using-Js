var isPerfectSquare = function(num) {
    let sum=0;
    for(let i=1;sum<num;i++){
        sum+=(2*i)-1;
        console.log(sum)
        if(sum==num){
            return true
        }
    }
    return false
};

