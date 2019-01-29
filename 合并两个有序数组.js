var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length);
    nums2=nums2.splice(0,n);
  
    nums1.splice(nums1.length,0,...nums2);

    return nums1.sort((a,b)=>{
        return a-b
    });
};

console.log(merge([-10,1,2,3,0,0,0],3,[2,5,6],3))