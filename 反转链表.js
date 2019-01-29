function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function(head) {
    let temp=head,newHead=head;
    while(head.next){
        temp = head.next; 
        console.log('*************')    
        console.log(temp);  
        head.next = temp.next;  
        console.log('head next is');
        console.log(head.next)
        temp.next = newHead;
        console.log('temp.next is');
        console.log(temp.next)
        newHead = temp;
        console.log('-------------------')
        console.log(newHead)
    }
    return newHead;
};

let myList=new ListNode(1);
myList.next=new ListNode(2);
myList.next.next=new ListNode(3);

reverseList(myList)