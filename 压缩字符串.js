var compress = function(chars) {
    let len=chars.length;
    if(len==1){
        return
    }
    let i=0,j=1,one,count=0;
    while (i < chars.length && j < chars.length) {
        one = chars[i];
        count = 1;
        while (j < chars.length && chars[j] == one) {
            count++;
            j++;
        }
        if (count != 1) {
            chars.splice(i+1,count-1);
            for(let k=0;k<String(count).length;k++){
                chars.splice(i+1+k,0,String(String(count)[k]))
            }
            i=i+2;
            j=i+1;
        }else{
            i++;
            j++;
        }
    }
    
};
let arr=["a","a","b","b","c","c","c",'c',"c","c","c",'c',"c","c","c",'c']
compress(arr)
console.log(arr)