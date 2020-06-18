/**
 * 94. Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
 */

 //iterative
 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let treeArr = [];
    let currRoot = root;
    
    let stack = [];
    
    //add to left
    while(currRoot || stack.length !== 0 ){
        if(currRoot){
            stack.push(currRoot);
            currRoot = currRoot.left;
        }else{
            currRoot = stack.pop(); //get the root of currRoot
            treeArr.push( currRoot.val);
            currRoot = currRoot.right;
        }
    }
    return treeArr;  
};

//recursive

let inorderTraversal = (root) => {
    
}
