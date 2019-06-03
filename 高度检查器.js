var heightChecker = function(heights) {
    let arr=JSON.parse(JSON.stringify(heights));
    arr=arr.sort((a,b)=>{return a-b});
    console.log(arr)
    let num=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=heights[i]){
            num++;
        }
    }
    return num;
};