/*
 * For your reference:
 * https://www.hackerrank.com/challenges/compare-two-linked-lists/problem
 * 
 * You’re given the pointer to the head nodes of two linked lists. 
 * Compare the data in the nodes of the linked lists to check if they are equal. 
 * The lists are equal only if they have the same number of nodes and corresponding 
 * nodes contain the same data. Either head pointer given may be null meaning 
 * that the corresponding list is empty.
 * 
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    while(llist1 || llist2){
        if (llist1 === null || llist2 === null){
            return 0;
        }  //takes care of any null spaces between or uneven lengths
        if(llist1.data != llist2.data){
            return 0;
        } //compares the data. not the same, return 0;
        if (llist1 === null && llist2 === null){
            return 1;
        } //takes care at the end to check and also if the both lists null/empty till the end as long as it doesn't pass through the case above, that means all data is matching up till this point

        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    return 1;
}