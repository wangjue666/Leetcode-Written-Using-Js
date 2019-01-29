var isHappy = function(n) {
    let arr=String(n).split('');
    let sum=0;
    if(arr.length==0){
        return false;
    }
    while(sum!=1){
        sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i]*arr[i];
        }
        arr=String(sum).split('');
    }
    return true;
};

function isHappy2(n){
    const recore = new Set();
    function isH (i) {
        const res =  [...('' + i)].reduce((acc, val) => {
            acc +=Number(val * val);
            return acc;
        }, 0)
        if (res == 1){
            return true
        }
        if (recore.has(res)) {
            return false
        } 
        recore.add(res);
        
        return isH(res);
    }
    return isH(n);
}

const res =  [...('' + 10)].reduce((acc, val) => {
    console.log(acc,val)
    acc +=Number(val * val);
    return acc;
}, 0)

