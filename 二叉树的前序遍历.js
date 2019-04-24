var preorderTraversal = function(root) {
    let res_list=[],stack=[];
    while(root!==null||stack.length>0){
        if(root==null){
            root=stack.pop();
            root=root.right;
        }else{
            stack.push(root);
            res_list.push(root.val);
            root=root.left;
        }
    }
    return res_list;
};

class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res_list = [] #用来存放所有结点值
        stack = []      #只用来存放根结点的值
        while root != None or stack:
            if root == None:
                root = stack.pop()# 如果遍历到的根结点为空了，那就从stack中弹出根结点
                root = root.right #然后将右节点作为根结点，开始递归
            else:
                stack.append(root)#如果根结点不为空，stack添加根结点
                res_list.append(root.val)#将根结点的值也添加res_list
                root = root.left#再把左结点的值作为根节点，开始递归
        return res_list