/*
Delete a Node
https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

You’re given the pointer to the head node of a linked list and the position of a node to delete. Delete the node at the given position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The list may become empty after you delete the node.

Input Format

You have to complete the deleteNode(SinglyLinkedListNode* llist, int position) method which takes two arguments - the head of the linked list and the position of the node to delete. You should NOT read any input from stdin/console. position will always be at least 0 and less than the number of the elements in the list.

The first line of input contains an integer n, denoting the number of elements in the linked list.
The next n lines contain an integer each in a new line, denoting the elements of the linked list in the order.
The last line contains an integer  denoting the position of the node that has to be deleted form the linked list.

*/

function deleteNode(head, position) {
    if (position === 0){
        if (head === null) { return head;}
        head = head.next;
        return head;
    }
 
    let currNode = head;
    let prevNode = null;
    let counter = 0;
    while( counter < position ){
         prevNode = currNode;
         currNode = currNode.next;
         counter++;
    }
    prevNode.next = currNode.next;
 
     return head;
 }