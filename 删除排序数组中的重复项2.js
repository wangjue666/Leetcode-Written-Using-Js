var removeDuplicates = function(nums) {
    let count=0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            count++;
            if(count>=2){
                nums.splice(i,1);
                i--;
            }
        }else{
            count=0;
        }
        console.log(i,count)
    }
    return nums.length;
};
let nums=[0,0,1,1,1,1,2,3,3];
removeDuplicates(nums);
console.log(nums)