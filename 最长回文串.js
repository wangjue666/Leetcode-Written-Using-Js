var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s.length;
    }
    var sArray = s.split("");
    sArray.sort();
    var number = 0;
    var tempChar = sArray[0];
    var tempLength = 1;
     
    for (var i=1; i<sArray.length; i++) {
        if (sArray[i] == tempChar) {
            tempLength ++;
        } else {
            tempChar = sArray[i];
            tempLength = 1;
        }
        
        if (tempLength%2 == 0) {        
            number += 2;
        }
        
    }
    
    if (sArray.length%2==0 && sArray.length!=number) {
        number ++;
    }
    if (sArray.length%2 == 1) {
        number ++;
    }
    
    return number;
};


console.log(longestPalindrome('abccccdd'))