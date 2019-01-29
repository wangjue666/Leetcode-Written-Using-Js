var mySqrt = function(x) {
    let r=x;    
    let lastVal=0; 
    while(r>x/r){
        r = (r +x/r)/2;
        if(r==lastVal){
            return Math.floor(r);
        }else{
            lastVal=r;
        }
    }
    return Math.floor(r);
};

console.log(mySqrt(120));