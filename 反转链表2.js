var reverseBetween = function(head, m, n) {
    let dummy=new ListNode(0);
    dummy.next=head;
    let pre=dummy;
    for(let i=1;i<m;i++){
        pre=pre.next;
    }
    head = pre.next;
    for(let i = m; i < n; i++){
        let nex = head.next;
        head.next = nex.next;
        nex.next = pre.next;
        pre.next = nex;
    }
    return dummy.next;
};

