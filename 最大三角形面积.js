var largestTriangleArea = function(points) {
    //循环 + 海伦公式 s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    var a,b,c,p;
    function s(x, y, z){
        a = Math.sqrt(Math.pow(x[0]-y[0], 2) + Math.pow(x[1]-y[1], 2));
        b = Math.sqrt(Math.pow(x[0]-z[0], 2) + Math.pow(x[1]-z[1], 2));
        c = Math.sqrt(Math.pow(z[0]-y[0], 2) + Math.pow(z[1]-y[1], 2));
        p = (a+b+c)/2;
        return p*(p-a)*(p-b)*(p-c);
    }
    var res = 0;
    for(var i=0;i<points.length-2;i++){
        for(var j=i+1;j<points.length-1;j++){
            for(var k=j+1;k<points.length;k++){
                res = Math.max(res, s(points[i], points[j], points[k]));
            }
        }
    }
    return Math.sqrt(res);
};