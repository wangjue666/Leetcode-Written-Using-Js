var addStrings = function(num1, num2) {
    let result='';
    let len=num1.length>num2.length?num1.length:num2.length;
    let carry=0;
    for(let i=1;i<=len;i++){
        let temp=Number(num1[num1.length-i]||0)+Number(num2[num2.length-i]||0)+carry;
        if(temp>=10){
            carry=1;
        }else{
            carry=0;
        }
        temp=String(temp);
        result=temp[temp.length-1]+result;
    }
    if(carry>0){
        result=String(carry)+result
    }
    return result;
};

console.log(addStrings('1','9'))

