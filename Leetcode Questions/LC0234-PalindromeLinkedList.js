/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //approach using stack and while loops

var isPalindrome = function(head) {
    let currNode = head;
    let stack = [];
    //traverse through the list and add each one to the stack
    while (currNode) {
        stack.push(currNode.val);
        currNode = currNode.next;
    }
    // console.log(stack);
    
    //traverse again but this time pop off the last stack value and compare with the traversing list value.
    // ex [1,2] traversing list,  stack is [1,2], stack.pop = 2  (2 != 1)
    while(head){
        stackVal = stack.pop();
        if (stackVal != head.val){
            return false;
        }
        head = head.next;
    }
    return true;
};
