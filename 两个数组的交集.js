var intersection = function(nums1, nums2) {
    let result=[];
    nums1.forEach(item=> {
        if(nums2.indexOf(item)!=-1){
            result.push(item);
        }
    });
    return Array.from(new Set(result));
};

console.log(
    intersection([4,9,5,4],[9,4,9,8,4])
)