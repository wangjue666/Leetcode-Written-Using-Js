var oddEvenList = function(head) {
    if(head==null||head.next==null||head.next.next==null){
        return head;
    }
    let dummyHead1=new ListNode(-1);
    let dummyHead2=new ListNode(-1);
    let p1=dummyHead1;
    let p2=dummyHead2;
    let p=head;
    let i=0;
    while(p){
        if(i%2==0){
            p1.next=p;
            p=p.next;
            p1=p1.next;
            p1.next=null;
        }else{
            p2.next=p;
            p=p.next;
            p2=p2.next;
            p2.next=null;
        }
        i++;
    }

    p1.next=dummyHead2.next;
    return dummyHead1.next;
};