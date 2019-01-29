/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function newSum(l1,l2){
    let carry=0;
    let dummyHead=new ListNode(0);
    let curr=dummyHead;
    let p=l1,q=l2;
    
    while(p!=null||q!=null){
        let x=p!=null?p.val:0;
        let y=q!=null?q.val:0;
        let sum=carry+x+y;
        carry= sum/10;
        curr.next = new ListNode(sum % 10);
        curr=curr.next;
        if (p!=null) p = p.next;
        if (q!=null) q = q.next;
    }
    if(carry>0){
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
}

public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}


var addTwoNumbers = function(l1, l2) {
    let arr1=[];
    
    let arr2=[];

    function getListVal(listNode,arr){
        arr.push(listNode.val);
        if(listNode.next){
            getListVal(listNode.next,arr)
        }else{
            return
        }
    }
    function reverseArrToNum(arr){
        return Number(arr.reverse().join(''));
    }

    getListVal(l1,arr1);
    getListVal(l2,arr2);
    let res=reverseArrToNum(arr1)+reverseArrToNum(arr2);
    res=res.split('').reverse();
    let myList=new ListNode(res[0]);
    let temList=myList;
    for(let i=1;i<res.length;i++){
        let activeList=new ListNode(res[i])
        temList.next=activeList;
        temList=activeList;
    }
};

