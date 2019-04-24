var subsets = function(nums) {
    let res=[];
    for(let i=0,len=nums.length;i<len;i++){
        let temLen=res.length;
        for(let j=0;j<temLen;j++){
            let arr = res[j].slice();
            arr.push(nums[i]);
            res.push(arr);
        }
        res.push([nums[i]]);    
    }
    res.push([]);
    return res;
};

let nums=[1,2,3];
subsets(nums);

