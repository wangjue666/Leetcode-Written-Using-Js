var reverseOnlyLetters = function(S) {
    let l=0,r=S.length-1;
    S=S.split('');
    while(l<r){
        console.log(isWord(S[l]))
        if(isWord(S[l])&&isWord(S[r])){
            swap(l,r);
            l++;
            r--;
        }else if(!isWord(S[l])){
            l++;
        }else if(!isWord(S[r])){
            r--;
        }

    }
    return S.join('');
    function swap(l,r){
        let temp=S[l];
        S[l]=S[r];
        S[r]=temp;
    }
    function isWord(word){
        if((word>='a'&&word<='z')||(word>='A'&&word<='Z')){
            return true;
        }
        return false;
    }

};


function isWord(word){
    if((word>='a'&&word<='z')||(word>='A'&&word<='Z')){
        return true;
    }
    return false;
}

console.log(reverseOnlyLetters('ab-cd'))