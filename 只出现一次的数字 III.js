var singleNumber = function(nums) {
  let map={};
  let res=[];
  nums.forEach(item => {
      if(map[item]){
        map[item]+=1
      }else{
        map[item]=1;
      }
  }); 
  for(k in map){
    if(map[k]==1){
        res.push(k)
    }
  }
  return res;
};