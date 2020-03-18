// Delete duplicate-value nodes from a sorted linked list
//https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

/**
 * 
 * You're given the pointer to the head node of a sorted linked list, 
 * where the data in the nodes is in ascending order. Delete as few 
 * nodes as possible so that the list does not contain any value more
 * than once. The given head pointer may be null indicating that the 
 * list is empty.
*/


function removeDuplicates(head) {
    //always check if head is null
    if(head == null || head.next == null){return head;}
    
    //while the head.next is not null, you check this so tha tyou can always
    //compare with the next node. 

    //check also if the node next to it is the same
    // then set the head.next to the .next.next 
    while(head.next!=null && head.data==head.next.data) {
        head.next=head.next.next;
    }
    //recursive call and check again till you hit that head or head.next is null and it will return head;
    removeDuplicates(head.next);
  
    return head;
  }
  