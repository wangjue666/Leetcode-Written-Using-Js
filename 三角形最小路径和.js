var minimumTotal = function(triangle) {
    let triangleSize=triangle.length;
    for(let i=triangleSize-2;i>=0;i--){
		for(let j=0;j<=i;j++){
			if(triangle[i+1][j]<triangle[i+1][j+1]){
				triangle[i][j]+=triangle[i+1][j];
			}
			else{
                triangle[i][j]+=triangle[i+1][j+1];
            }
		}
	}
	return triangle[0][0];
}
