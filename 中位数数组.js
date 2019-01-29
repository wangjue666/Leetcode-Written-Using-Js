var findMedianSortedArrays = function(nums1, nums2) {
    let newArr=nums1.concat(nums2);
    newArr=newArr.sort((a,b)=>a-b);
    if(newArr.length%2==0){
        return (newArr[newArr.length/2]+newArr[(newArr.length/2)-1])/2
    }else{
        return newArr[Math.floor(newArr.length/2)];
    }
   
};
var findMedianSortedArrays2 = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    let temp=[];
    if(m>n){
        temp=nums1;
        nums1=nums2;
        nums2=temp;
    }
    let iMin=0,iMax=m,halfLen=(m + n + 1)/2;
    console.log(halfLen)
    while(iMin<=iMax){
        let i=(iMin + iMax)/2;
        let j=halfLen-i;
        if (i < iMax && nums2[j-1] > nums1[i]){
            iMin = i + 1; // i is too small
        }else if (i > iMin && nums1[i-1] > nums2[j]) {
            iMax = i - 1; // i is too big
        }else{
            let maxLeft=0;
            if(i==0) { 
                maxLeft=nums2[j-1] 
            }else if(j==0){ 
                maxLeft=nums1[i-1];
            }else{
                maxLeft=Math.max(nums1[i-1],nums2[j-1]);
            }
            if ( (m + n) % 2 == 1 ) { 
                return maxLeft;
            }
            let maxRight=0;
            if(i==m){ 
                minRight=nums2[j];
            }else if(j == n){ 
                minRight=nums1[i];
            }else{ 
                minRight=Math.min(nums2[j],nums1[i]);
            }
            return (maxLeft + minRight) / 2.0;
        }

    }
    return 0.0;
}

console.log(findMedianSortedArrays2([1,2],[3,4]))



