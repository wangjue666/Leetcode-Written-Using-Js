var isUgly = function(num) {
    if(num<1){
        return false;
    }
    while(num % 2 == 0){
        num = num / 2;
    }
    while(num % 3 == 0){
        num = num / 3;
    }
    while(num % 5 == 0){
        num = num / 5;
    }
    console.log(num)
    if(num == 1){
        return true;
    }else{
        return false;
    }
};

console.log(isUgly(4))