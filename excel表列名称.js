var convertToTitle = function(n) {
  let res='';
  while (n!==0) {
    n--;  
    let c=n%26;
    if(c>0){
        res =String.fromCharCode(65+c)+ res
    }else{
        res =String.fromCharCode(65+n)+ res
    }
    n = parseInt(n / 26)
  }
  return res
};

