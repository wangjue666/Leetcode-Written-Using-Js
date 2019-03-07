var countSegments = function(s) {
    if(s.length==0){
        return 0;
    }
    let arr=[];
    let count=0;
    arr=s.split(',');
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].trim().split(' ');
        if(arr[i]==''){arr[i]=[]}
        count+=arr[i].length;
    }
    console.log(arr);
   
    return count;
    
};

console.log(countSegments('     '))