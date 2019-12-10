var minTimeToVisitAllPoints = function(points) {
    let R=0;
    if(points.length == 0){
        return 0;
    }
    for(let i=0;i<points.length-1;i++){
        let X = Math.abs(points[i+1][0]-points[i][0]);//坐标X的差值
        let Y = Math.abs(points[i+1][1]-points[i][1]);//坐标Y的差值
        if(X>=Y){
            R = R+X;
        }else{
            R = R+Y; 
        }
    }
    return R
};

