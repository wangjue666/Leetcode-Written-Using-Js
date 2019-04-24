//215
var findKthLargest = function(nums, k) {
  quickSort(nums,0,nums.length);   
  console.log(nums);
  return nums[nums.length-k];
  function quickSort(nums,left,right){
    if(left<right){
      let partitionIndex = partition(nums, left, right);
      quickSort(nums, left, partitionIndex - 1);
      quickSort(nums, partitionIndex + 1, right);
    }
    return nums;
  }
  function partition(nums,left,right){
    let pivot=left;
    let index=pivot+1;
   
    for(let i=index;i<=right;i++){
      if(nums[i]<nums[pivot]){
        swap(nums,i,index);
        index++;
      }
    }
    swap(nums, pivot, index - 1);
    console.log(index-1,right,pivot);
    return index - 1;
  }
  function swap(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
  }
};

findKthLargest([7,6,5,4,3,2,1],2)