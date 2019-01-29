var rob = function(nums) {
    let numsLength=nums.length;
    let maxVal=0,prevVal=0,currVal=0;
    if(numsLength==0){
        maxVal=0;
    }else if(numsLength==1){
        maxVal=nums[0];
    }else{
        maxVal=nums[0];
        prevVal=nums[1];
        for(let i=2;i<nums.length;i++){
            currVal=nums[i]+maxVal; //Calculating Max Value except PrevElement,as Adjacent elements should be skipped
            maxVal=maxVal<prevVal?prevVal:maxVal; //Updating MaxVal by comparing with PrevElement
            prevVal=currVal; 
        }
    }
    return maxVal<prevVal?prevVal:maxVal;
};

public int rob(int[] nums) {
    int numsLength=nums.length;
    int maxVal=0,prevVal=0,currVal=0;
    if(numsLength==0){ //Case1:Length is 0
        maxVal=0;
    }else if(numsLength==1){ //Case2:Length is 1
        maxVal=nums[0];
    }else{ //Case 3:Length is more than 1 
        maxVal=nums[0];
        prevVal=nums[1];
        for(int i=2;i<nums.length;i++){
            currVal=nums[i]+maxVal; //Calculating Max Value except PrevElement,as Adjacent elements should be skipped
            maxVal=maxVal<prevVal?prevVal:maxVal; //Updating MaxVal by comparing with PrevElement
            prevVal=currVal; 
        }
    }
    return maxVal<prevVal?prevVal:maxVal;
}