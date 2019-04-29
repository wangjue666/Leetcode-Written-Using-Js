var numSquares = function(n) {
    if(n<0){
        return 0;
    }
    if(check1(n)){
        return 1;
    }else if(check2(n)){
        return 2;
    }else if(check3(n)){
        return 3;
    }else{
        return 4;
    }

    function check1(n){
        let tem =parseInt(Math.sqrt(n));
        return tem*tem==n;
    }
    function check2(n){
        for(let i=1;i*i<n; i++){
            console.log(i)
            if(check1(n-i*i)){
                return true;
            }    
        }
        return false;
    }
    function check3(){
        for(let i=1;i*i<n ; i++){
            if(check2(n-i*i)){
                return true;
            }
        }
        return false;
    }
    
};

numSquares(12);