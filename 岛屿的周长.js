var islandPerimeter = function(grid) {
    let num=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                num+=add(grid,i,j)
            }
        }
    }
    return num;

    function add(arr,i,j){
        let n = 0;
        if(i===0 || arr[i-1][j]!==1){
            n+=1
        }
        if(i === arr.length-1 || arr[i+1][j]!==1){
            n+=1
        }
        if(j === 0 || arr[i][j-1]!==1){
            n+=1
        }
        if(j === arr[i].length-1 || arr[i][j+1]!==1){
            n+=1
        }
        return n
    }
};

var islandPerimeter = function(grid) {
    let num = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                num+=add(grid,i,j)
            }
        }
    }
    return num
    
    function add(arr,i,j){
        let n = 0
        if(i===0 || arr[i-1][j]!==1){
            n+=1
        }
        if(i === arr.length-1 || arr[i+1][j]!==1){
            n+=1
        }
        if(j === 0 || arr[i][j-1]!==1){
            n+=1
        }
        if(j === arr[i].length-1 || arr[i][j+1]!==1){
            n+=1
        }
        return n
    }
};