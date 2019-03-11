var reverseWords = function(s) {
    var arr = s.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.join(" ");
};

reverseWords('abc')