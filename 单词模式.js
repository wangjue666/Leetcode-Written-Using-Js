var wordPattern = function(pattern, str) {
    const patternArr = [...pattern];
    const strArr=str.split(' ');
    if(strArr.length!=pattern.length){
        return false;
    }
    const record = new Map();
    for(let i = 0; i < patternArr.length; i++) {
        if (record.has(patternArr[i])) {
            if (record.get(patternArr[i])!== strArr[i]) {
                return false;
                break;
            }
        } else {
            record.set(patternArr[i], strArr[i])
        }
    }
   
    const a = [...new Set(record.values())]
    
    if (record.size == a.length){
        return true;
    } else {
        return false;
    }

};

wordPattern('abba',"dog cat cat dog")