var addTwoNumbers = function(l1, l2) {
    let dummy=new ListNode(-1);
    let s1=[],s2=[];
    let p=l1;
    while(p!=null){
        s1.push(p.val);
        p=p.next;
    }
    p = l2;
    while (p!= null) {
        s2.push(p.val);
        p = p.next;
    }
    let carry=0,sum=0;
    while(s1.length!=0||s2.length!=0){
        let x = s1.length==0 ? 0 : s1.pop();
        let y = s2.length==0 ? 0 : s2.pop();
        sum = x + y + carry;
        carry= parseInt(sum / 10);
        sum = sum % 10;
        let node = new ListNode(sum);
        node.next = dummy.next;
        dummy.next = node;
    }
    if (carry > 0) {
        let node = new ListNode(carry);
        node.next = dummy.next;
        dummy.next = node;
    }
    return dummy.next;
};


class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1);
        Stack<Integer> s1 = new Stack<>();
        Stack<Integer> s2 = new Stack<>();
        ListNode p = l1;
        while (p != null) {
            s1.push(p.val);
            p = p.next;
        }
        p = l2;
        while (p != null) {
            s2.push(p.val);
            p = p.next;
        }
        int carry = 0, sum = 0;
        while (!s1.isEmpty() || !s2.isEmpty()) {
            int x = s1.isEmpty() ? 0 : s1.pop();
            int y = s2.isEmpty() ? 0 : s2.pop();
            sum = x + y + carry;
            carry = sum / 10;
            sum = sum % 10;
            ListNode node = new ListNode(sum);
            node.next = dummy.next;
            dummy.next = node;
        }
        if (carry > 0) {
            ListNode node = new ListNode(carry);
            node.next = dummy.next;
            dummy.next = node;
        }
        return dummy.next;
    }