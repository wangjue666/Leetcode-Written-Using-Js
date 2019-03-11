var judgeCircle = function(moves) {
    let count=[0,0,0,0];
    for(let i=0;i<moves.length;i++){
        switch(moves[i]){
            case "U":
                count[0]++;
                break;
            case "D":
                count[1]++;
                break;
            case "L":
                count[2]++;
                break;
            case "R":
                count[3]++;
                break;            
        }
    }
    console.log(count)
    return count[0] == count[1] && count[2] == count[3];
};

console.log(judgeCircle("RLUURDDDLU"))