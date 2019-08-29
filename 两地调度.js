 //先计算出全部去A城的费用，再根据差值生成数组升序排序，获取差最小的前一半元素与A城所有费用和
var twoCitySchedCost = function(costs) {
    let res=0;
    let arr=[];
    for(let i=0;i<costs.length;i++){
        res += costs[i][0];
        arr[i] = costs[i][1] - costs[i][0];
    }
    arr.sort((a,b)=>a-b);
    for(var j=0;j<costs.length/2;j++){
        res += arr[j];
    }
    return res;
}

