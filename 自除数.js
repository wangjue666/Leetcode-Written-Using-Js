var selfDividingNumbers = function(left, right) {
    let output = [];
    for(let i = left; i <= right; i++){
        i = i.toString();
        if(i.indexOf('0') === -1){
            let flag = true;
            for( let j = 0; j < i.length; j++){
                if(i % i[j] !== 0) flag = false;
            }
            i = Number(i);
            flag && output.push(i)
        }
    }
    return output;
};