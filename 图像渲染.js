var floodFill = function(image, sr, sc, newColor) {
    let arrived=new Array(image.length);
    for(let i=0;i<arrived.length;i++){
        arrived[i]=new Array(image[0].length)
    }
    let val=image[sr][sc];
    graphDfs(image,arrived,sr,sc,newColor,val);

    return image;

    function graphDfs(image,arrived,sr,sc,newColor,val){
        if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length){
            return;
        }
       
        if(image[sr][sc] == val && !arrived[sr][sc]){
           
            image[sr][sc] = newColor;
            arrived[sr][sc] = 1;
            graphDfs(image, arrived, sr + 1, sc, newColor, val);
            graphDfs(image, arrived, sr - 1, sc, newColor, val);
            graphDfs(image, arrived, sr, sc + 1, newColor, val);
            graphDfs(image, arrived, sr, sc - 1, newColor, val);
            return;
        }
    }
};


let res=floodFill(
    [[1,1,1],[1,1,0],[1,0,1]],
    1,
    1,
    2)

    console.log(res)



