var reverseStr = function(s, k) {
    let i=0;
    s=s.split('');
    console.log(s);
    for(;i<s.length&&s.length-i>=2*k;i+=2*k){
        let j=i,c=i+k-1;
        while(j<c){
            let temp=s[j];
            s[j]=s[c];
            s[c]=temp;
            j++, c--;
        }
    }
    if(s.length-i<k){
        let j=i;c=s.length-1;
        while(j<c){
            let temp=s[j];
            s[j]=s[c];
            s[c]=temp;
            j++, c--;
        }
    }

    if(s.length - i >= k && s.length - i < 2 * k){
        let j = i, c = i + k - 1;
        while( j < c){
            let temp=s[j];
            s[j]=s[c];
            s[c]=temp;
            j++, c--;
        }
    }

    return s.join('');
};

console.log(reverseStr("abcdefg",2))