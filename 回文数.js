var isPalindrome = function(x) {
    let arr=String(x).split('');
    arr=arr.reverse();
    let newNum=Number(arr.join(''));
    return newNum==x;
};

console.log(isPalindrome(101))