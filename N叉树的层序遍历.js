var levelOrder = function(root) {
    let result = [];
    function bfs(node, level) {
        if (!node) return;
        if (!result[level]) result[level] = [node.val];
        else result[level].push(node.val);
        level++;
        for (let c in node.children) {
            bfs(node.children[c], level);
        }
    }
    bfs(root, 0);
    return result;
};