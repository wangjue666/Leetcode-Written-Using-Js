var reachNumber = function(target) {
    let t=Math.abs(target);
    let s=0;
    let dis=0;
    while(dis<t){
        s++;
        dis+=s;
    }
    let dt=dis-t;
    if(dt%2==0){
        return s;
    }else{
        if(s%2==0){
            return s+1;
        }else{
            return s+2;
        }
    }
};


