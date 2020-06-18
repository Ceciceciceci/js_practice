/***********************************
7. Reverse Integer https://leetcode.com/problems/reverse-integer/
***********************************/
/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x); //save this to multiply to it later
    //x*sign to change it positive and then reverse
    let revNum = (x*sign).toString().split('').reverse().join('');
    let num = Number(revNum); //this will get rid of leading 0;
    
    //test the out of bounds, if it is return 0
    if(num > (Math.pow(2,31) - 1) || num < (-Math.pow(2,31))) { return 0; }
    //test if the number is negative and not out of bounds
    if(sign === -1){
        return sign*revNum;
    }
    return num;
};

var reverse = function(x) {
    let sign = Math.sign(x);
    let revNum = (x*sign).toString().split('').reverse().join('');
    let finalNum = Number(revNum);
     
    //check sign
    if (sign === -1){
        finalNum = finalNum*sign; 
        if (finalNum < Math.pow(-2, 31)){ return 0;}
    }
    if (finalNum > (Math.pow(2, 31) - 1)){ return 0; }
    return finalNum; 
}; 

//SHORTEST AND FASTEST VERSIONS
var reverse = function(x) {
    let sign = Math.sign(x);
    let revNum = (x*sign).toString().split('').reverse().join('');
    let finalNum = Number(revNum);
    //check sign
    if (sign === -1){
        finalNum = finalNum*sign; 
    }
    return ((finalNum < Math.pow(-2, 31)) || (finalNum > (Math.pow(2, 31) - 1))) ? 0 : finalNum;
}; 