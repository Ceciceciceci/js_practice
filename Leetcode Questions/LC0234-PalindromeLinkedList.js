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

//current on'///

//interested on
//rubyy on rails 
// ember to react 
// proj: a way to fill customer support req
//    -> messaging
//    -> self-service, billing team, buying experience
//    -> not voicing, user interface subscription management, down grade flow, cancelation, 
//    -> inter dependancies, ceiling and floor, shopping cart, team lead, 
//    -> unit testing, r stack, automated unit test, javascript side, jasmine testing js, robust more than ruby
        //  -> jasmine, next steps: two options: take home assignment (a week), a working front end js page but done in barebones js and html css, reimplement the same functonality, in your own JS framework, 3 hrs of your time,
        //  -> one hr coding screen thr zoom, coderpad, much more code intensive