var detectCapitalUse = function(word) {
    if(word.length<1||/[0-9]/.test(word)){
        return false;
    }
    if(word.toUpperCase()==word){
        return true;
    }
    if(word.substr(0,1).toLowerCase()!=word.substr(0,1)&&word.substr(1,word.length).toLowerCase()==word.substr(1,word.length)){
        return true;
    }
    if(word.toLowerCase()==word){
        return true;
    }
  
    return false;
};