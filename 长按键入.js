var isLongPressedName = function(name, typed) {
    for(let i = 0, j = 0;i < name.length;i++, j++){
        if(name[i] != typed[j]){
            return false;
        }
        if(name[i] != name[i+1]){
            while(typed[j] == typed[j+1]){
                j++;
            }  
        }
    }
    return true;
};

console.log(isLongPressedName('laaiden','laaaiden'))