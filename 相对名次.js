var findRelativeRanks = function(nums) {
    var returnString =[];
    var signMap = [];
    var sortNums =[];
    sortNums = deepClone(nums);
    
    sortNums = sortNums.sort(function(a,b) {return b-a;});
    
    for (var i=0; i<sortNums.length; i++) {
        signMap[sortNums[i]] = i + 1;
    }
    
    for (var i=0; i<nums.length; i++) {
        if (signMap[nums[i]] == 1) {
            returnString[i] = "Gold Medal";
        } else if (signMap[nums[i]] == 2) {
            returnString[i] = "Silver Medal";
        } else if (signMap[nums[i]] == 3) {
            returnString[i] = "Bronze Medal";
        } else {
            returnString[i] = signMap[nums[i]].toString();
        }
    }
    return returnString;
    
};

// 深度拷贝
function deepClone(obj){
    let _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
    return objClone
}    