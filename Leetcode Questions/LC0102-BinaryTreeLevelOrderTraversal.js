/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

 /*
     3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //base case
     if (root == null) { return []; }
    
    //Will use a queue for this problem, kind of like people waiting in line 
    //In the example it's like a line of 1 person, 2 people, 2 people 
    let result = []; //this is where we store results
    let queue = [root]; //this is a queue for that level, starting at root lvl first
   
    while(queue.length){
        const size = queue.length; //set the size to determine how many nodes are at that level
        let currLvl = []; //we will process the queue to here to get stored to results later.
        
        for (let i = 0; i < size; i++){
            const node = queue.shift(); //shift the nodes from the queue waiting
            currLvl.push(node.val); //push that node from the queue into this currLvl
            
            //now check if the current node has left or right children
            //add them to the queue for processing later
            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
        }
        //now add those nodes to the result;
        result.push(currLvl);
    }
    return result;
};

//using recursion
//O(n), faster
var levelOrder = function(root) {
    var result = [];
    var currLvl = 0; //do by level
    traverse(root, currLvl); //create a call bk function recursion
    return result;

    // input the currlvl to keep track of what level is finished 
    function traverse(root, currLvl) {
        if (root === null) { return []; }
        else {
            
            //if the currLvl is done processing all the nodes for that lvl, start a new array for that lvl
            if (currLvl >= result.length) {
                 result[currLvl] = [];
            }

            result[currLvl].push(root.val); //push the current value into the currLvl 
            //if the current Node has a children left and right, move in the next lvl
            traverse(root.left, currLvl + 1);
            traverse(root.right, currLvl + 1);
        }
    }
};
//runs like result[currLvl]
// result[0] = 3;
// result[1]
