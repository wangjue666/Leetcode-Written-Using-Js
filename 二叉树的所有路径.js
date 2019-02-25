var binaryTreePaths = function(root) {
    const paths = [];
    
    const queue = [
        [
            root, []
        ]
    ];
    
    while(queue.length) {
        const [current, pathList] = queue.shift();
        if(!current) continue;
        
        pathList.push(current.val);
        
        if(!current.left && !current.right) {
            paths.push(pathList);
            continue;
        }
        queue.push([current.left, pathList.slice()], [current.right, pathList.slice()]);
    }
    return paths.map(item => item.join('->'));
};
