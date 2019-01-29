var maxArea = function(height) {
    let max=0;
    let h=0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            h=height[i]>height[j]?height[j]:height[i];
            if(h*(j-i)>max){
                max=h*(j-i);
            }
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))