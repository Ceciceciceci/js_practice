/**
 * 141. Linked List Cycle && 142
 * https://leetcode.com/problems/linked-list-cycle/
 * 
 * Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list, we use an integer pos 
which represents the position (0-indexed) in the linked list where tail 
connects to. If pos is -1, then there is no cycle in the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
 */

//USING MAP O(n) run O(N)space
var detectCycle = function(head) {
    if (head == null) { return null; } //base case
    else {
        // now we use a map to keep track of which nodes have been visited
        const nodeMap = new Map();
        while (head.next) {
            if (nodeMap.has(head)){ return head; }
            else { nodeMap.set(head); } //add it to map
            head = head.next; //iterate
        }
        return null; //else
    }
}

//USING 2 PTERS, good for inifinte amt of nodes O(n) run , O(1) space
var detectCycle = function(head) {
    if (head == null || head.next == null) return null;
        
    let slow = head;
    let fast = head;

    //we are gonna iterate now to check if they land on same node
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;
    };

    //we are going to check if fast node next is null bc that means if not it's not a cycle
    if (fast == null || fast.next == null) return null;

    slow = head; // this step to check again to make sure slow = fast where they land
    //leave fast where it is but use slow to loop again through begining
    //if they land then return slow;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}