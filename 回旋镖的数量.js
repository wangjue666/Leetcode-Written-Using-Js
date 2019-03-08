var numberOfBoomerangs = function(points) {
    const { length } = points;
    if (length < 3) return 0;
    let total = 0;
    for (let i = 0; i < length; i++) {
        const map = new Map();
        for (let j = 0; j < length; j += 1) {
            if (i === j) continue;
            const dist = distance(points[i], points[j]);
            map.set(dist, (map.get(dist)||0) + 1);
        }
        for (const n of map) {
             if (n[1] >= 2){
                total += (n[1] * (n[1] - 1));
             } 
        }
    }
    function distance(pointA,pointB){
        let x=pointA[0]-pointB[0];
        let y=pointA[1] - pointB[1];
        return x * x + y * y;
    }
    return total; 
};

