var mostCommonWord = function(paragraph, banned) {
    let arr=paragraph.toLowerCase().replace(/[\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\.|\?]/g," ").split(/\s+/);
    let map={};
    for(let i=0;i<arr.length;i++){
        if(banned.indexOf(arr[i])==-1&&arr[i]!=''){
            map[arr[i]]=map[arr[i]]?map[arr[i]]+1:1;
        }
    }
    let minNum=-99;
    let resWord='';
    for(k in map){
        if(map[k]>minNum){
            minNum=map[k];
            resWord=k;
        }
    }
    return resWord;
};

var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
var banned = ["hit"]
console.log(mostCommonWord(paragraph,banned))