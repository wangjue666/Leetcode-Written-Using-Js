var isOneBitCharacter = function(bits) {
    let countConsecutive1 = 0;
    for(let i=bits.length-2;i>=0;i--){
        if(bits[i]==1){
            countConsecutive1++;
        }else{
            break;
        }
    }
    return countConsecutive1%2==0;
};

class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        int countConsecutive1 = 0;
        for(int i = bits.length-2; i >= 0; i--){
            if(bits[i]==1) countConsecutive1++;
            else break;
        }
        return countConsecutive1%2==0;
    }
}