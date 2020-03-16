/*
Insert a Node at the Head of a Linked List
https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

You’re given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer, insert this node at the head of the linked list and return the new head node. The head pointer given may be null meaning that the initial list is empty.

Input Format

You have to complete the SinglyLinkedListNode Insert(SinglyLinkedListNode head, int data) method which takes two arguments - the head of the linked list and the integer to insert. You should NOT read any input from stdin/console.
*/

function insertNodeAtHead(head, data) {
    if(head === null) {
        head = new SinglyLinkedListNode(data);
        return head;
    }

   let currHead = head;
   head = new SinglyLinkedListNode(data);
   head.next = currHead;
    return head;
}