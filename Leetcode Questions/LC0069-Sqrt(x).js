/**
 * 69. Sqrt(x)
 * https://leetcode.com/problems/sqrtx/
 * 
 * Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
 */


/**
 * @param {number} x
 * @return {number}
 * * Using built Math func in js library
 */
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))
};

 /**
  * Using Binary search 
 */
// var mySqrt = function(x) {
//     let l = 0;
//     let r = 94906265; // Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));
//     while (l <= r) {
//         const m = Math.floor(l + (r - l) / 2);
//         const m2 = m * m;
//         if (m2 === x) {
//             return m;
//         } else if (x < m2) {
//             r = m - 1;
//         } else {
//             l = m + 1;
//         }
//     }
//     return r;
// };