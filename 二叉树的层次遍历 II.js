var levelOrderBottom = function(root) {
    var bottomUp = function(root, deep, number) {
        if(root == null) {
            return 
        }
        if(!!number[deep]) {
            number[deep].push(root.val)
        } else {
            number[deep] = [root.val]
        }
        
        if(root.left != null) {
            bottomUp(root.left, deep+1, number)
        }
        if(root.right != null) {
            bottomUp(root.right, deep+1, number)
        }
    }
    let number = []
    bottomUp(root, 0, number)
    return number.reverse()
};