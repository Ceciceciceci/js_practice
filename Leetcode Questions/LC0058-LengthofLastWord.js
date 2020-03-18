/*
58. Length of Last Word
https://leetcode.com/problems/length-of-last-word/
*/
/**
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //trim off any white space around like ''
    s = s.trim();
    //split it into an array to get the last word
    let sArray = s.split(" ");
    //set last word
    let lastWord = sArray[sArray.length-1];
    //check if the the last word is " " then return 0 otherwise return length of word
    if (lastWord === " ") { return 0; }
    return lastWord.length;
};