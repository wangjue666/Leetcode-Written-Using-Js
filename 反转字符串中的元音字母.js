var reverseVowels = function(s) {
    s=[...s];
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(!isVowel(s[left])){
            left++;
        }
        if(!isVowel(s[right])){
            right--;
        }else if(isVowel(s[left]) && isVowel(s[right])){
            let temp=s[left];
            s[left]=s[right];
            s[right]=temp;
            left++;
            right--;
        }

    }
    return s.join('');
    function isVowel(letter){
        let arr=['a','e','i','o','u','A','E','I','O','U'];
        if(arr.indexOf(letter)==-1){
            return false;
        }
        return true;
    }
};

