var maxProfit = function(prices) {
    let maxSub=0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>maxSub){
                maxSub=prices[j]-prices[i];
            }
        }
    }
   
    return maxSub;
};

var maxProfit2 = function(prices) {
    let minprice=Math.max.apply(null,prices);
    let maxprofit=0;
    for(let i=0;i<prices.length;i++){
        if (prices[i] < minprice){
            minprice = prices[i];
        }else if (prices[i] - minprice>maxprofit){
            maxprofit = prices[i] - minprice;
        }    
        console.log('最小值'+minprice,'最大值'+maxprofit)       
    }
    return maxprofit;
}



console.log(maxProfit2([7,1,5,3,6,4]))