var diStringMatch = function(S) {
    S += "I";
    let strArr = S.split('');
    let Arr = [...new Array(S.length)].map((item,index) => index)
    let result = [];
    strArr.forEach((item) => {
        if (item == "I") {
            result.push(Arr.shift())
        } else {
            result.push(Arr.pop())
        }
    })
    return result
};