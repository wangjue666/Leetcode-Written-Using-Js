var longestPalindrome = function(s) {
    let subString=s[0]||"";
    for(let i=0;i<s.length;i++){
        let cur=s[i];
        let acc = s.slice(i);
        let index = acc.lastIndexOf(cur);
        if(index!=-1){
            let left = i; // 1
            let right = index + i; // 2

            while (index !== 0 && index != -1) {
                if (s[left] === s[right]) {
                    if (right - left < 2) {
                        subString = index  + 1 > subString.length ? s.slice(i, index + i + 1) : subString;
                        break;
                    }
                    left += 1;
                    right -= 1;
                }else {
                    index = s.slice(i, index + i).lastIndexOf(cur);
                    left = i;
                    right = index + i;
                }
            }
        }
    }
    return subString;
};
