var customSortString = function(S, T) {
    let cnt=0;
    T=T.split('');
    for(let i=0;i<S.length;i++){
        for(let j=0;j<T.length;j++){
            if(T[j]==S[i]){    
                let tmp=T[j];
                T[j]=T[cnt++];
                T[cnt-1]=tmp;
            }
        }
    }
    return T.join("");
};
