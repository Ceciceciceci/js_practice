/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
Calling next() will return the next smallest number in the BST.

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.
*/

function BSTIterator(root) {
    var stack = [];
    return {hasNext, next};
  
    function hasNext() {
      return root || stack.length; //check if the stack length is > 0 
    }
  
    function next() { //returns min
      while (root) {
        stack.push(root);
        root = root.left; //keep checking left 
      }
      root = stack.pop(); //this will pop off the smallest number
      var result = root.val; //store the result
      root = root.right; // traverse down the right side to account for that 
      return result; //return the result
    }
  }


var BSTIterator = function(root) {
    this.index = 0;
    this.arr = [];
    this.arr = helper(this.arr, root);

    function helper(arr, node){
      if (!node) return arr;

      arr = helper(arr, node.left);
      arr.push(node.val);
      arr = helper(arr, node.right);
      return arr;
    }
};
BSTIterator.prototype.next = function() {
   this.index++;
   return this.arr[this.index-1];
};
BSTIterator.prototype.hasNext = function() {
    return this.index <= this.arr.length-1;
};