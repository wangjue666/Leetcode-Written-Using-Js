package main

func main(){
	
}

func minTimeToVisitAllPoints(points [][]int) int {
    if len(points) <= 1 {
        return 0
    }
    ret := 0
    for i := 1; i < len(points); i++ {
        ret +=  max(abs(points[i][0] - points[i-1][0]), abs(points[i][1] - points[i-1][1]))
    }
    return ret
}

func abs(x int) int {
    if x < 0 {
        return -1 * x
    }
    return x
}

func max(x, y int) int {
    if x >= y {
        return x
    }
    return y
}