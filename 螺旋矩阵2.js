var generateMatrix = function(n) {
    let res=[];
    for(let i=0;i<n;i++){
        res[i]=[];
    }
    let row = 0,rowLen = n-1;
    let col = 0,colLen = n-1;
    let count = 1;
    while(row<=rowLen&&col<=colLen){

         // 左右(行)
         for(let i = col;i<=colLen;i++){
            res[row][i] = count++; 
         }
         if(rowLen == row) break;
         row++;

         // 上下(列)
         for(let i = row;i<=rowLen;i++){
            res[i][colLen] = count++;
         }
         if(col == colLen) break;
         colLen--;

         //右左(行)
         for(let i=colLen;i>=col;i--){
            res[rowLen][i] = count++;
         }
         if(row == rowLen) break;
         rowLen--;


         // 下上(列)
         for(let i=rowLen;i>=row;i--){
            res[i][col] = count++;
         }
         if(col==colLen) break;
         col++;
    }
    return res;
};

class Solution {
    public int[][] generateMatrix(int n) {
      
        // 行列都是n
        int[][] res = new int[n][n];
        
        int row = 0,rowLen = n-1;
        int col = 0,colLen = n-1;
        int count = 1;
        
        while(row<=rowLen&&col<=colLen){ // 这里添加了=就对了
            // 分别循环遍历四个角，并进行初始赋值左右->上下->右左->下上；
            // 螺旋是个方框，四个边都要往内前进，每个边的值有的是加，有的是减
            
            
            // 左右(行)
            for(int i = col;i<=colLen;i++){
                res[row][i] = count++; 
            }
            // 有可能是最后依次遍历行
            if(rowLen == row) break;
            row++;// 再遍历只能遍历下一行
            
            // 上下(列)
            for(int i = row;i<=rowLen;i++){
                res[i][colLen] = count++;
            }
            if(col == colLen) break;
            colLen--;
            
            //右左(行)
            for(int i=colLen;i>=col;i--){
                res[rowLen][i] = count++;
            }
            if(row == rowLen) break;
            rowLen--;
            
            // 下上(列)
            for(int i=rowLen;i>=row;i--){
                res[i][col] = count++;
            }
            if(col==colLen) break;
            col++;
            
        }
        return res;
        
    }
}

generateMatrix(3);