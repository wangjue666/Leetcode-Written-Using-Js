var rotate = function(nums, k) {
    k=k%nums.length;
    let spliceArr=nums.splice(nums.length-k,k);
    for(let i=k-1;i>=0;i--){
        nums.unshift(spliceArr[i])
    }
    return nums;
};

var rotate2 = function (arr,shift){
    function reverse(arr,begin,end){
        while(begin < end){
            var temp = arr[begin];
            arr[begin] = arr[end];
            arr[end] = temp;
            begin ++;
            end --;
        }
    }
	var length = arr.length;
	shift = shift % length;
    reverse(arr,length-shift,length-1);
    console.log(arr)
    reverse(arr,0,length-shift-1);
    console.log(arr)
    reverse(arr,0,length-1);
    return arr;
}

console.log(rotate2([1,2,3,4,5,6,7],3))