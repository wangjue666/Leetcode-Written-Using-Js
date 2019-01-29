var containsDuplicate = function(nums) {
    if(nums.length==0){
        return false
    }
    let newArr=Array.from(new Set(nums));
    if(newArr.length!=nums.length){
        return true
    }else{
        return false
    }

};