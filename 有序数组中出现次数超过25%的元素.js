var findSpecialInteger = function(arr) {
    let len = arr.length
    let count = 0
    let select
    if(len == 1){
        return arr[0]
    }
    for(let i=0;i<len;i++){
        let item = arr[i]
        if(item == select){
            count++ 
            if(count / len > 0.25){
                return select
            }
        }else{
            count = 1
            select = item
        }
    }
    
};

var findSpecialInteger2 = function(arr) {
    for (let i = 0, len = Math.floor(arr.length / 4); i < arr.length - len; i++) {
        if (arr[i] == arr[i + len]) {
            return arr[i];
        }			
    }
			
	return arr[0];
    
};

console.log(findSpecialInteger2([1,2,2,6,6,6,6,7,10]))