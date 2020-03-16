/*******************************
202. Happy Number https://leetcode.com/problems/happy-number/
********************************/
/*
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
//RUN TIME: O(n) but slow if add and sqr runs more than 30 seq
let counter = 0;
var isHappy = function(n) {
    let numArray = n.toString().split('');
    if (n <= 0) { return false; }
    if (n === 1) { return true; }
    
    let sqrSum = 0; //reset 
    for (let i = 0; i < numArray.length; i++){
        sqrSum += numArray[i]*numArray[i];
    }
    sqrSum = Number(sqrSum);
    counter++;
    if (sqrSum === 1){
        return true;
    } else {
        if (counter > 50){
            return false;
        } else{ 
            return isHappy(sqrSum); 
        }
    }
};

//OPTIMIZED: 
//use reduce and decalc with math there
