var deleteNode = function(node) {
    if(!head){
        return null;
    }
    head.next=removeElements(head.next, val);
    return head.val==val?head.next:head;
};