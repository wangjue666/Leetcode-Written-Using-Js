var thirdMax = function(nums) {
    let max1=-99999999999,max2=-99999999999,max3=-99999999999;
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(num>max1){
            max3=max2,
            max2=max1,
            max1=num;
        }else if(num==max1||num==max2||num==max3){
            continue
        }else if(num>max2){
            max3=max2;
            max2=num;
        }else if(num>max3){
            max3=num;
        }
    }
    if(max3!==-99999999999){
        return max3;
    }else{
        return max1;
    }
}