var combinationSum = function(candidates, target) {
    candidates.sort((x,y)=> x-y);
    
    const count = (candidates,target) => {
        let res = [];
        for(let i = 0;i<candidates.length;i++){
            let num = candidates[i];
            let x = 1;
            while(x*num <= target){
                let left = target - x*num;
                if(left == 0){
                   
                    res.push(Array.from({length:x},v => num));
                }else if(left > 0){
                    res = res.concat(
                        count(candidates.slice(i + 1), left).map(arr =>
                          Array.from({length:x},v => num).concat(arr)
                        )
                    )

                }
                x++
            }
        }
        return res    
    }
    return count(candidates,target)
};

console.log(combinationSum([2,3,6,7],7))