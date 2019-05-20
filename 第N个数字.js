var findNthDigit = function(n) {
    if (n < 10)  return n;
    let length=0,cnt=9,i=1;
    for(;length+cnt*i<n;i++){
        length += cnt * i;
        cnt *= 10;
    }
    console.log('length is',length,'cnt is',cnt)
    let num=Math.pow(10,i-1)-1+(n-length+1)/i;
    console.log('i is',i)
    console.log('n is',n)
    let index=(n-length-1)%i;
    console.log('index is',index,'num is',num)
    console.log(String(num)[index])
    return String(num)[index]-'0'
};

console.log(findNthDigit(12))

