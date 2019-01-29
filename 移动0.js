var moveZeroes = function(nums) {
    let len=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]==0){
            len+=1;
            nums.splice(i,1);
            i-=1;
        }else if(nums>0){
            break;
        }
    }
    for(let i=0;i<len;i++){
        nums.push(0);
    }

};
let nums=[-1,-30,1,0,3,12];
moveZeroes(nums)
console.log(nums)