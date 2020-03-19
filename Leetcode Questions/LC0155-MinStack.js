/**
 * 155. Min Stack  https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
_________________________________________________________
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 
*/

var MinStack = function() {
    this.stack = {};
    this.size = 0;
    this.minStack = []; //used to save min value in O(1) time
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.size] = x;
    this.size++;
    
    if (!this.minStack.length || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    } 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removed = this.stack[this.size - 1];
    delete this.stack[this.size - 1];
    this.size--;
    
    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    
    // return removed;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //like peeking
    return this.stack[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */