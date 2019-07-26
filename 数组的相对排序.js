var relativeSortArray = function(arr1, arr2) {
    var res = [];
    for(var i=0;i<arr2.length;i++){
        var num = arr2[i];
        while(arr1.includes(num)){
            var idx = arr1.indexOf(num);
            var temp = arr1.splice(idx, 1);
            res = res.concat(temp);
        }
    }
    return res.concat(arr1.sort((a,b)=>a-b))
};
var relativeSortArray = function(arr1, arr2) {
    //先将arr1数组中按arr2元素进行排序，再将arr1剩余元素进行升序，返回拼接结果
    var res = [];
    for(var i=0;i<arr2.length;i++){
        var num = arr2[i];
        while(arr1.includes(num)){
            var idx = arr1.indexOf(num);
            var temp = arr1.splice(idx, 1);
            res = res.concat(temp);
        }
    }
    return res.concat(arr1.sort((a,b)=>a-b))
};
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，
使 arr1 中项的相对顺序和
arr2 中的相对顺序相同。
未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

