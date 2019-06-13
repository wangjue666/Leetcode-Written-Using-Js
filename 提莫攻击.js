var findPoisonedDuration = function(timeSeries, duration) {
    let wakeup=0,sleep=0;
    let prevtime=0;
    for(let i=0;i<timeSeries.length;i++){
        if(timeSeries[i]>=wakeup){
            sleep+=duration;
        } else{
            sleep+=(timeSeries[i] - prevtime)
        }
        wakeup=timeSeries[i]+duration;
        prevtime=timeSeries[i];        
    }
    return sleep
};
console.log(
    findPoisonedDuration([1,2],3)
)
