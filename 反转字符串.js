var reverseString = function(s) {
    let len=s.length;
    let i=0;
    let j=len-1;
    while(i<j){
        let tem=s[i];
        s[i]=s[j];
        s[j]=tem;
        i++;
        j--;
    }
    return s;
};

public String reverseString(String s) {
    char[] chars = s.toCharArray();
    int length = chars.length;
    int i = 0;
    int j = length - 1;
    while (i < j){
        char temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        i++;
        j--;
    }
    return String.valueOf(chars);
}

console.log(reverseString(["a","b","c"]))