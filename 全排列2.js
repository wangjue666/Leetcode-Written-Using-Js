var permuteUnique = function(nums) {
    let res=[];

    function bfs(arr,result){
        if(arr.length==0){
            res.push([...result]);
        }
        var hash=new Map();
        for(var i=0;i<arr.length;i++){
            if(hash.has(arr[i])){
                continue;
            }
            hash.set(arr[i],true);
            bfs(arr.slice(0,i).concat(arr.slice(i+1)),result.concat([arr[i]]));
        }
    }

    bfs(nums,[]);
    return res;
};



 