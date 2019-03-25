var middleNode = function(head) {
    let middleNode = head;
    let currentNode = head;
    let isEven = false;
    
    while(true){
        currentNode = currentNode.next;
        if(isEven){
            middleNode = middleNode.next
            isEven = false;
        }else{
            isEven = true;
        }
        if(currentNode === null) {
            return middleNode;
        }
    }
};


var middleNode = function(head) {
    let middleNode = head;
    let currentNode = head;
    let isEven = false;
    
    while(true) {
        currentNode = currentNode.next

        if (isEven) {
            middleNode = middleNode.next
            isEven = false
        } else {
            isEven = true
        }
        
        if (currentNode === null) {
             return middleNode;
        }
    }
};