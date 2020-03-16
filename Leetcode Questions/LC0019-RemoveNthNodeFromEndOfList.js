/*************************************************
19. Remove Nth Node From End of List
*************************************************/
/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var currNode = head;
    var fasterNode = head;

    //1.) decrement n to create the nth-offset of current node to the
    //  faster pointer node and the current node
    while (n>0){
        n--;
        fasterNode = fasterNode.next;
    }

    //if null, it will skip the next while loop
    //now that the fasternode pointer is set n away
        //check if fasterNode exists and if fasterNode next exists, and traverse
    while(fasterNode && fasterNode.next){
       currNode = currNode.next;
       fasterNode = fasterNode.next;
    }
    
    //now that faster node reach the end
        // change the currNode's next to current node's next next
        // to remove that currNode
    if (!fasterNode){ //for case where n is the same as the length of the list ex[1,2], n = 2
        //so fasterNode becomes null from the first while loop bc fasterNode = fasterNode.next is null
            //it will not enter the second while loop
        head = head.next; //make the head the next value since it's the most nth value from end
    } else {
        currNode.next = currNode.next.next; //traverse the slow pointer  
    }
    return head;
};