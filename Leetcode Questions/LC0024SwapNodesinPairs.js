/***********************************
24. Swap Nodes in Pairs  https://leetcode.com/problems/swap-nodes-in-pairs/
************************************/
/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if (!head || !head.next) return head;
    let temp = null; //this will trail behind
    let node1 = head; let node2 = head.next;
    
    while(node2){
        //it will always start the the second node anyway when you swap
        if(temp == null){
            head = node2;
        } else {
            temp.next = node2;
        }
            
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
        
        //traverse
        node1 = node1.next;
        if(node1 === null){
            node2 = null;
        } else {
            node2 = node1.next;
        }
    }
    return head;
};


//using recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if (!head || !head.next) return head;
    
    let temp = head.next; /* set it to the second item because you already know 
    when you swap the nodes the second one will always be first. */
    head.next = temp.next;
    temp.next = head;
    head.next = swapPairs(head.next);

    return temp;
};