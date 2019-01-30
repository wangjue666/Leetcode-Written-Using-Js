//wrong
var rotateString = function(A, B) {
    if(A.length!=B.length){
        return false;
    }
    let index=B.indexOf(A[0]);
    for(let i=1;i<A.length;i++){
        console.log(B[(index+1)%B.length],A[i])
        if(index==-1||B[(index+1)%B.length]!==A[i]){
            return false;
        }else{
            index+=1;
        }  
    }

    return true;
};
let A="bqqutquvbtgouklsayfvzewpnrbwfcdmwctusunasdbpbmhnvy"
let B="wpnrbwfcdmwctusunasdbpbmhnvybqqutquvbtgouklsayfvze"

console.log(rotateString(A,B))

//right
var rotateString = function(A, B) {
    if(A.length !== B.length) return false;
    return (B + B).includes(A)
};