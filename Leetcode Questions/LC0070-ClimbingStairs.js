/**
 * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
https://leetcode.com/problems/climbing-stairs/


Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

 /**
  * Following the fibonacci method you get a similar answer
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //base case
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 3;
    
    let a = 1;
    let b = 2;
    let result = 0;
    for (i = 2; i < n; i++){
        result = a + b;
        a = b;
        b = result;
    }
    return result;
};

//DP Fibonacci Recursive

var climbStairs = function(n) {
    let array = [0, 1, 2];
    for(var i = 3; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n];
};