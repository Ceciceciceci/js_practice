/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let currNode = root; //use this save the root to next root of the numbers
    if (root == null){ return 0; } // if the root is null just return 0; base case

    //set left and right to the call maxDepth again to keep count on each side how further down it could get
    let left = maxDepth(currNode.left);
    let right = maxDepth(currNode.right);

    //get the max of the left and right and then add 1 for the root. 
    return Math.max(left, right) + 1; 
};