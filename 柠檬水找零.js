var lemonadeChange = function(bills) {
    let ten = 0,five = 0;
    if(bills[0] > 5){
        return false
    }
    for(let i = 0; i < bills.length; i ++){
        if(bills[i] === 5){
            five ++ ;
        }else{
            if(bills[i] === 10){
                ten ++;
            }
            bills[i] = bills[i] - 5;
            while(bills[i] !== 0 ){
                if(bills[i] > 10 && ten > 0){
                    bills[i] = bills[i] - 10;
                    ten --;
                }else{
                    if(five > 0){
                        bills[i] = bills[i] - 5;
                        five --;
                    }else{
                        return false;
                    }
                }
            }
        }
    }
    return true
};


console.log(lemonadeChange([5,5,10,10,20]))