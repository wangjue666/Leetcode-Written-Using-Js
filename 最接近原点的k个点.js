var kClosest = function(points, K) {
    
    points.sort((a,b)=>{
        return (Math.pow(a[0],2)+Math.pow(a[1],2))-(Math.pow(b[0],2)+Math.pow(b[1],2))
    })

    return points.splice(0,K);
};


console.log(kClosest([[1,3],[-2,2]],1))