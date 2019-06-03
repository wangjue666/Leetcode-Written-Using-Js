var isMonotonic = function(A) {
    let bAdd=false,bSub=false;
    if(A.length==1){
        return true;
    }
    for(let i=1;i<A.length;i++){
        if(A[i]>A[i-1]){
            bAdd=true;
            if(bSub){
                return false
            }
        }else if(A[i]<A[i-1]){
            bSub=true;
            if(bAdd){
                return false;
            }
        }
    }
    if(bAdd&&bSub){
        return false
    }else{
        return true
    }
};
console.log(222)
console.log(isMonotonic([6,13,5,5,4,10]))