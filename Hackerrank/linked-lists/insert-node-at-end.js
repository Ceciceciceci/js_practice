/*
Insert a Node at the Tail of a Linked List
https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

Input Format

You have to complete the SinglyLinkedListNode insertAtTail(SinglyLinkedListNode head, int data) method. It takes two arguments: the head of the linked list and the integer to insert at tail. You should not read any input from the stdin/console.

The input is handled by code editor and is as follows:
The first line contains an integer , denoting the elements of the linked list.
The next  lines contain an integer each, denoting the element that needs to be inserted at tail.
*/

function insertNodeAtTail(head, data) {
    //takes care of head 
    if (head === null) { head = new SinglyLinkedListNode(data); return head;}
    let currNode = head;
    //now do tail, we cycle through testing if there is next node,
    //if not, exit of while loop
    while(currNode.next){
        currNode = currNode.next;
    }
    currNode.next = new SinglyLinkedListNode(data);
    return head;
}
