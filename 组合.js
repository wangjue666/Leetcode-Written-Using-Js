var combine = function(n, k) {
    let ans=[],res=[]
    function dfs(idx){
        if(res.length===k){
            ans.push(res.map(item => item));
        }else if(res.length<k){
            for(let i=idx;i<=n;i++){
                res.push(i);
                dfs(i+1);
                res.pop();
            }
        }
    }
    dfs(1)
    return ans;
};


let combine = function(n, k) {
    let ans=[],res=[]
    function dfs(idx){
        if(res.length===k){
            ans.push(res.map(item => item));
        }else if(res.length<k){
            for(let i=idx;i<=n;i++){
                res.push(i);
                dfs(i+1);
                res.pop();
            }
        }
    }
    dfs(1)
    return ans;
};
