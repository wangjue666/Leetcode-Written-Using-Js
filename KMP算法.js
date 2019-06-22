function getNext(p,next=[]){
    next[0]=-1;
    let i=0;j=-1;
    while(i<p.length){
        if(j==-1||p[i]==p[j]){
            i++;
            j++;
            next[i]=j;
        }else{
            j=next[j];     
        }
    }
    return next;
}
function kmp(t,p){
    let i=0,j=0;
    let next=getNext(p);
    while(i<t.length&&j<p.length){
        if(j==-1||t[i]==p[j]){
            i++;
            j++;
        }else{
            j=next[j];
        }
    }
    if(j==p.length){
        return i-j;
    }else{
        return -1;
    }
}


console.log(kmp('abaaaac','aac'))