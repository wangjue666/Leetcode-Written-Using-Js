var convert = function(s, numRows) {
    if(s==null||s.length<=0||numRows==1){
        return s;
    }
    let number=s.split('');
    let newNumber=[];
    let count=0;
    let sum=(numRows-1)*2;
    console.log(sum)
    for(let i=0;i<numRows;i++){
        let limit=(sum-2*i)<=0?sum:sum-2*i;
        console.log('limit is',limit,'i is ',i)
        let j=i;
        while(j<number.length){
            newNumber[count++] = number[j];
            j = j + limit;
            limit = (sum-limit) >0 ? sum-limit:limit;
        }
    }
    console.log(newNumber)
    return newNumber.join('')
};

console.log(convert("PAYPALISHIRING",3))
