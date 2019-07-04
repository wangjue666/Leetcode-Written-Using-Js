var postorder = function(root) {
    if (!root) { 
        return [];
    }
    var result = [root.val]
    var concat = function (array) {
        if (array.length !== 0 ) {
            for(var i = array.length - 1; i >= 0; i--) {
                result.unshift(array[i].val)
                concat(array[i].children)
            }
        }
    }
    concat(root.children)
    return result
};
public List<Integer> postorder(Node root) {
    List<Integer> res = new ArrayList<Integer>();
    if(root == null)
        return res;
    Stack<Node> stack = new Stack<Node>();
    Node pre = null;
    stack.push(root);
    while(!stack.isEmpty()){
        Node curr = stack.peek();
        if((curr.children.size() == 0)||(pre != null && (curr.children.contains(pre)))){
            res.add(curr.val);
            pre = curr;
            stack.pop();
        }else{
            for(int i = curr.children.size()-1;i>=0;i--){
                stack.push(curr.children.get(i));    
            }    
        }                     
    }
    return res;    
}