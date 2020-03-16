/*
Print the Elements of a Linked List
https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

If you're new to linked lists, this is a great exercise for learning 
about them. Given a pointer to the head node of a linked list, print 
its elements in order, one element per line. If the head pointer is 
null (indicating the list is empty), don’t print anything.
*/

function printLinkedList(head) {
    let currNode= head;
   
    while (currNode){
        console.log(currNode.data);
        currNode = currNode.next;
    }
   
}