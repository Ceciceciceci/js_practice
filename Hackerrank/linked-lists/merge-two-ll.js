// Merge two sorted linked lists

// You’re given the pointer to the head nodes of two sorted linked lists. The data in both lists will be sorted in ascending order. Change the next pointers to obtain a single, merged linked list which also has data in ascending order. Either head pointer given may be null meaning that the corresponding list is empty.

function mergeLists(head1, head2) {
    if (head1 == null){ return head2; } //if head1 is null, return head2 node
    if (head2 == null){ return head1; } //if head2 is null, return head1 node
    //if head 1 data is less than head 2, return head1, next recursive check again
    if (head1.data < head2.data){
        head1.next = mergeLists(head1.next, head2);
        return head1;
    } else {
        //if head 2 data is less than head 1, return head2, next recursive check again 
        head2.next = mergeLists(head1, head2.next);
        return head2;
    }
    //by doing this you are traversing by recursively calling 
}

