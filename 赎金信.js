var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length>magazine.length){
        return false;
    }
    const map={};
    for(let i=0;i<magazine.length;i++){
        map[magazine[i]]=map[magazine[i]]?map[magazine[i]]+1:1;
    }
    for(let i=0;i<ransomNote.length;i++){
        if(map[ransomNote[i]]&&map[ransomNote[i]]>0){
            map[ransomNote[i]]--;
        }else{
            return false;
        }
    }
    return true;
};