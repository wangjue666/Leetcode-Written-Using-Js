var hasGroupsSizeX = function(deck) {
    if(deck.length<2){
        return false
    }
    let map={};
    for(let i=0;i<deck.length;i++){
        map[deck[i]]=map[deck[i]]+1||1
    }
    result = Object.values(map)
    const min = Math.min(...result)
    if (min < 2) {
        return false
    }
    for (let tmp = 2; tmp <= min;tmp++) {
        if (result.every(item => item % tmp === 0)) {
            return true
        }
    }
    return false
};


console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))