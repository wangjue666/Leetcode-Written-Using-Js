var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1);
            i=i-1;
        }   
    }
    return nums.length;
};
let arr=[3,2,2,3];
removeElement(arr,3);
console.log(arr)