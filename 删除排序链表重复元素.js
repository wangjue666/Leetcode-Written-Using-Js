var deleteDuplicates = function(head) {
    let tem=head;
    if(!head.val){
        return head
    }
    while(tem.next!=null){
         if(tem.val==tem.next.val){
            tem.next=tem.next.next;   
         }else{
             tem=tem.next;
         }
       
    }
    return head
};