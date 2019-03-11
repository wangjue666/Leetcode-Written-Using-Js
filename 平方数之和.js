var judgeSquareSum = function(c) {
   
    for(let i=parseInt(Math.sqrt(c));i>-1;i--){
      if(Math.sqrt(c-(i*i))%1==0){
        return true;
      }
    }
    return false;
};

console.log(judgeSquareSum(18))