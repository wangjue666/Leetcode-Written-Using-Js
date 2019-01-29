class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // 类似归并排序中的合并过程
        ListNode dummyHead = new ListNode(0);
        ListNode cur = dummyHead;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                cur.next = l1;
                cur = cur.next;
                l1 = l1.next;
            } else {
                cur.next = l2;
                cur = cur.next;
                l2 = l2.next;
            }
        }
        // 任一为空，直接连接另一条链表
        if (l1 == null) {
            cur.next = l2;
        } else {
            cur.next = l1;
        }
        return dummyHead.next;
    }



var mergeTwoLists = function(l1, l2) {
    let dummyHead=new ListNode(0);
    let cur=dummyHead;
    while(l1!=null&&l2!=null){
        let x=l1.val;
        let y=l2.val;
        if(x<y){
            cur.next=new ListNode(x);
            l1=l1.next;
        }else{
            cur.next=new ListNode(y);
            l2=l2.next;
        }
        cur=cur.next;
    }
    if (l1 == null) {
        cur.next = l2;
    } else {
        cur.next = l1;
    }
    return dummyHead.next;
};