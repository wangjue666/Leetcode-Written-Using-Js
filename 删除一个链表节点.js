let removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let p = dummyHead;
    let q = dummyHead;
    for(let i = 0; i < n+1; i++) {
        q = q.next;
    }
    while(q !== null) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;
    if (dummyHead.next === null) {
        return []
    }else {
        return  dummyHead.next
    }
};



    
   
   
   
    