var twoSum = function(numbers, target) {
    let res=[];
    
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]==target){
                res=[i+1,j+1];
            }
        }
    }

    return res;
};

var twoSum2 = function(numbers, target) {
    let l=0,r=numbers.length-1;
    while (l<r){
        if (numbers[l]+numbers[r]==target){
            let res=[l+1,r+1];
            return res;
        } else if(numbers[l]+numbers[r]<target)
            l++;
        else{
            r--;
        }     
    }



}