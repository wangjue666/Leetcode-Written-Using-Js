var findDisappearedNumbers = function(nums) {
    const hash= {};
    const result=[];

    for(let n of nums){
        if(!hash[n]){
            hash[n] = true;
        }
    }
    for(let i =1;i<=nums.length;i++){
      if(!hash[i]){
          result.push(i)
      }  
    }
    return result;
};

console.log(findDisappearedNumbers([2,1,4,4]))