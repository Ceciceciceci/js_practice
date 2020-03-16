// Get Node Value

// You’re given the pointer to the head node of a linked list and a specific position. Counting backwards from the tail node of the linked list, get the value of the node at the given position. A position of 0 corresponds to the tail, 1 corresponds to the node before the tail and so on.
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    //take care of first base, if list size is 1 and remove is at 1
    if (positionFromTail===1 && head.size === 1){
        return 1;
    }
    let currNode = head;
    let tailNode = head; // this one will be used first to go n away from the currNode so that when you cycle both pointers through, you get n away from the tail.
    while (positionFromTail--){
        tailNode = tailNode.next;
    }
    while (tailNode && tailNode.next){
        tailNode = tailNode.next;
        currNode = currNode.next;
    }
    return currNode.data;
}