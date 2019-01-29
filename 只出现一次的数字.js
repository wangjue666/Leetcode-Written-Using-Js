var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++){
        let active=nums[i];
        let index=nums.lastIndexOf(active);
        if(index!=-1&&index!=i){
            nums.splice(i,1); 
            nums.splice(index-1,1);
            i=-1;
        }else{
            return active;
        }
    }
};

console.log(singleNumber([1,1,2,2,4]));