var findTheDifference = function(s, t) {
    let map={};
    for(let i=0;i<s.length;i++){
        map[s[i]]=map[s[i]]?map[s[i]]+1:1
    }
    console.log(map)
    for(let i=0;i<t.length;i++){
        if(map[t[i]]&&map[t[i]]>0){
            map[t[i]]--;
        }else{
            return t[i]
        }
    }
    console.log(map)
};

var findTheDifference2 = function(s, t) {
      let char=t[0].charCodeAt();
      for(let i=0;i<s.length;i++){
          char^=s[i].charCodeAt();
          char^=t[i+1].charCodeAt();
      }  
      return String.fromCharCode(char)
};
console.log(findTheDifference2('abcd','abcde'));