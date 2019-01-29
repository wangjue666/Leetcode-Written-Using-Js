var removeDuplicates = function(nums) {
    nums=Array.from(new Set(nums));
    console.log('nums is ')
    console.log(nums);
    return nums.length;
};
let arr=[1,1,2,1,1,2222222,4,55];
//removeDuplicates(arr);
var removeDuplicates2 = function(nums) {
   for(let i=0;i<nums.length;i++){
       if(nums[i]==nums[i+1]){
           nums.splice(i,1);
           i=i-1;
       }
   };
   return nums.length;
};

removeDuplicates2(arr);

console.log(arr);