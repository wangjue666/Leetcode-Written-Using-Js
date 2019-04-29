//419

var countBattleships = function(board) {
    let res=0;
    for(let i=0;i<board.length;i++){
        for(let j=0;i<board[0].length;j++){
            if(board[i][j]=='X'){
                if((i==board.length-1||board[i+1][j]=='.')&&(j==board[0].length-1||board[i][j+1]=='.')){
                    res++;
                }
            }
        }
    }
    return res;
};

class Solution {
    public int countBattleships(char[][] board) {
        int res=0;
        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
                if(board[i][j]=='X'){
                    if((i==board.length-1||board[i+1][j]=='.')&&(j==board[0].length-1||board[i][j+1]=='.')){
                        res++;
                    }
                }
            }
        }
        return res;
    }
}