var getRow = function(rowsIndex) {
    if (rowsIndex === 0) return [1];

    const result = [[1]];
    
    for (let index = 1; index < rowsIndex + 1; index++) {
        const last = result[result.length - 1];
        result.push(Array(index + 1).fill(1).map((_, ind) => (last[ind] || 0) + (last[ind - 1] || 0)))
    }

    return result[rowsIndex];
};