/*********************************************
 * 21. Merge Two Sorted Lists https://leetcode.com/problems/merge-two-sorted-lists/
 * *******************************************
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newList  = new ListNode(); //create a new list
    let head = newList; //make a new head variable to return the new list.

    //check that l1 and l2 are not null
    while (l1 !== null && l2 !== null){
        if (l1.val < l2.val){ //if the list1 val < l2 val, 
            newList.next = new ListNode(l1.val); //take the newList node's next and set to new val of list1 val
            l1 = l1.next; //traverse one on list1
        } else { //same logic here 
            newList.next = new ListNode(l2.val);
            l2 = l2.next;
        }  
        newList = newList.next;//traverse the new list 
    }

    //takes care of null at the end of list
    if (l1 == null) { newList.next = l2; };
    if (l2 == null) { newList.next = l1; };
   
    return head.next;
};