var averageOfLevels = function(root) {
    const numList=[];
    let node=root;
    let nodeList=[];
    let nodeList2 = [];
    numList.push(node.val);
    if(node.left){
        nodeList.push(node.left);
    }
    if(node.right){
        nodeList.push(node.right);
    }
    while(nodeList.length){
        let sum=0;
        for (let i = 0; i < nodeList.length; i++) {
            sum+=nodeList[i].val;
            if (nodeList[i].left) {
                nodeList2.push(nodeList[i].left)
            }
            if (nodeList[i].right) {
                nodeList2.push(nodeList[i].right)
            }
        }
        numList.push(sum/nodeList.length);
        nodeList = nodeList2;
        nodeList2 = [];
    }
    return numList
}


var averageOfLevels = function(root) {
    const numList = []
    let node = root
    let nodeList = []
    let nodeList2 = []
    numList.push(node.val)
    if (node.left) {
        nodeList.push(node.left)
    }
    if (node.right) {
        nodeList.push(node.right)
    }
    while(nodeList.length) {
        let sum = 0
        for (let i = 0; i < nodeList.length; i++) {
            sum+=nodeList[i].val
            if (nodeList[i].left) {
                nodeList2.push(nodeList[i].left)
            }
            if (nodeList[i].right) {
                nodeList2.push(nodeList[i].right)
            }
        }
        numList.push(sum/nodeList.length)
        nodeList = nodeList2
        nodeList2 = []
    }
    return numList
};