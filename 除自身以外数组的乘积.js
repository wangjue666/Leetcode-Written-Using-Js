var productExceptSelf = function(nums) {
    let left=1,right=1;
    let len=nums.length;
    let output=new Array(len);
    for(let i=0;i<len;i++){
        output[i]=left;
        left*=nums[i];
    }
    console.log(output);
    console.log(left)
    for(let i=len-1;i>=0;i--){
        output[i]*=right;
        right*=nums[i];
    }
    return output
};
productExceptSelf([1,2,3,4])

