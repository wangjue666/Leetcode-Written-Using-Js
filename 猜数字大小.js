function guessNumber(n){
    let l=1;
    let r=n;
    let mid=parseInt(l+(r-l)/2);
    while(l<=n){
        if(guess(mid)==-1){
            r = mid - 1;
            mid = parseInt(l + (r - l)/2);
        }else if(guess(mid)==1){
            l=mid+1;
            mid = parseInt(l + (r - l)/2);
        }else{
            return mid;
        }
    }
    return 1
}

