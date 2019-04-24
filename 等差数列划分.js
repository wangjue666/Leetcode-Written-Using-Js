var numberOfArithmeticSlices = function(A) {
    let dp=0,sum=0,d1=A[1]-A[0];
    for(let i=2;i<A.length;i++){
        let d2=A[i]-A[i-1];
        if(d2==d1){
            sum+=(++dp); 
        }else{
            dp=0;
        }
        d1=d2;
    }
    return sum;
};
let res=numberOfArithmeticSlices([1,2,3,8,9,10]);
console.log(res);