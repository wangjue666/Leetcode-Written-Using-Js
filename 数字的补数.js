var findComplement = function(num) {
       num=num.toString(2);
       let temp='';
       for(let char of num){
           if(char=='0'){
               temp+='1';
           }else{
               temp+='0';
           }
       }
       return parseInt(temp,2);
};

console.log(findComplement(5))