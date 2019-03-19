
var isAlienSorted = function (words, order) {

    let map = new Map([...order].map((letter, i) => [letter, String.fromCharCode(97 + i)]));
    words = words.map(word => word.split('').map(letter=>map.get(letter)).join(''));
    let l = words.length;
    for (let i = 0; i < l - 1; i++) {
        if (words[i] > words[i + 1]) {
            return false;
        }
    }
    return true;
};

let words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
isAlienSorted(words,order)