var getIntersectionNode = function(headA, headB) {
    const map = {};
    while (headA) {
      map[headA.val] =headA;
      headA = headA.next;
    }

    while (headB) {
      if(map[headB.val]==headB) {
        return headB;
      }
      headB = headB.next;
    }

    return null;
};