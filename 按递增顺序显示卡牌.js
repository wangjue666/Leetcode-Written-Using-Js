var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b) => {
        return b-a; 
    });
    var temp=new Array();
    var result=new Array();
    for (var i=deck.length;i>1;i--){
        result.unshift(deck.shift())
        result.unshift(result.pop())
    }
    result.unshift(deck.pop())
    return result;
};
