/********************************************
  2. Add Two Numbers https://leetcode.com/problems/add-two-numbers/
  ******************************************/
 /*
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
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

var addTwoNumbers = function(l1, l2) {
    //you want to traverse both lists
    let temp_head = new ListNode(0); //make a new linked list to return
    let l3 = temp_head; 
    let carry = 0;
    
    //need to take care if list lengths are different
    while (l1 || l2){ //check to make sure l1 and l2 either are not null
        let sum = 0; //sum always 0 at beginning
        
        //take care of null if l1 or l2 is null when both lists length !=
        if (l1 == null) {sum += l2.val}  //if l1 is null, just add l2
        else if (l2 == null) {sum += l1.val} //if l2 is null, just add l1
        else{ 
            sum = l1.val + l2.val; //add both if none null
        }
        //if there is a carry, add it to the sum
        if (carry > 0){
            sum += carry;
            carry = 0; //after adding, set carry to 0 
        }
        
        //if sum is greater than 10, add to carry, &take the last digit of sum
        if (sum > 9){
            carry = Math.floor (sum / 10); //get the first digit
            sum = (sum % 10); //get the last digit
        }
        
        //push the sum to the new list.
         let newNode = new ListNode(sum);
         l3.next = newNode;     

        // traverse the two original
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next
        }
        // traverse the new linked list
        l3 = l3.next;
        
        //if carry is found in the last sum, make a new node and point next
        if (carry > 0 && l3.next == null){
            let newNode = new ListNode(carry);
            l3.next = newNode;    
        }
    }    
    
    return temp_head.next;
};

//TEST:

//Runtime: 92 ms, faster than 99.88% of JavaScript online submissions for Add Two Numbers.
//Memory Usage: 38.6 MB, less than 34.72% of JavaScript online submissions for Add Two Numbers.