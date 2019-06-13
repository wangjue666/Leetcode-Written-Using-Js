var uniqueMorseRepresentations = function(words) {
    let map=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    for(let i=0;i<words.length;i++){
        words[i]=words[i].split('');
        
        for(let j=0;j<words[i].length;j++){
            words[i][j]=map[words[i][j].charCodeAt()-97]
        }
        words[i]=words[i].join('')
    }
    words=[...new Set(words)]
    return words.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))