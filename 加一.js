// var plusOne = function(digits) {
//     let carry = 1;
//     const result = [];
//     for (let number of digits.reverse()) {
//         if(number + carry >= 10) {
//             result.unshift((number + carry) % 10);
//             carry = 1;
//         } else {
//             result.unshift(number + carry);
//             carry = 0;
//         }
//     }
    
//     if(carry === 1) {
//         result.unshift(1);
//     }
    
//     return result
// };


var plusOne = function(digits) {
    let carry=1;
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]+carry>=10){
            console.log('来了')
            digits[i]=(digits[i]+carry)%10;
        }else{
            carry=0;
            digits[i]+=1;
            break;
        }
    }
    if(carry==1){
        digits.unshift(carry)
    }
    return digits;
}

console.log(plusOne([9,9,9,9]));