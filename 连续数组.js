
var findMaxLength = function(nums) {
    let hash=new Map();
    hash.set(0,-1);
    let res=0;
    let s=0;
    for(let i = 0; i < nums.length; i++) {
        s += nums[i] ? 1 : -1;
        if (hash.has(s)) {
           res = Math.max(res, i - hash.get(s))
        } else {
            hash.set(s, i)
        }
    }
    return res;
};

var findMaxLength = function (nums) {
    let hash = new Map()
   
     hash.set(0, -1)
     let res = 0
     let s = 0
   
     for (let i = 0; i < nums.length; i++) {
       s += nums[i] ? 1 : -1;
       if (hash.has(s)) {
         res = Math.max(res, i - hash.get(s))
       } else {
         hash.set(s, i)
       }
   
     }
   
     return res
   };