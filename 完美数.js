var checkPerfectNumber = function(num) {
  let i,sum=1;
  for(i=2;i<=num/2;i++){
    if(num%i==0){
        sum=sum+i;
    }
  }
  if(sum==num&&sum!=1){
     return true;
  }else{
     return false;
  }
};
bool checkPerfectNumber(int num) {
    int i,sum=1;
    for(i=2;i<=num/2;i++){
        if(num%i==0){
            sum=sum+i;
        }
    }
    if(sum==num&&sum!=1)
        return true;
    else
        return false;
}