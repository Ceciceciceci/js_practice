/**
 * 237. Delete Node in a Linked List
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
 * @param {*} node 
 */

// You don't delete the given node.
// You copy the value from the next node, then delete the next node.
var deleteNode = function(node) {
    node.val = node.next.val;
   node.next = node.next.next;
};