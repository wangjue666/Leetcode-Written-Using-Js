var topKFrequent = function(nums, k) {
    let hash = {}
    nums.forEach(num=>{
      hash[num]?hash[num]+=1:hash[num]=1
    })
    return Object.keys(hash).sort((key1,key2)=>hash[key2]-hash[key1]).slice(0,k)
};