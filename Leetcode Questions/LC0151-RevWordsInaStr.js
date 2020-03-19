/*
151. Reverse Words in a String
https://leetcode.com/problems/reverse-words-in-a-string/?fbclid=IwAR1BX8ydhsQxv1OC2rO1BEsNnLf5M7gKLgPiO_gYBHuIpsxLI7pQZT9SZX0
*/
/*
Given an input string, reverse the string word by word.
Example 1:
Input: "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim(); //trim any white space around
    s = s.replace(/\s+/g, " "); //use regex to get rid of any extra spaces in between like '  ' shorten to ' '
    let sArray = s.split(" "); // turn into array
    sArray.reverse(); //reverse it
    return sArray.join(" "); //join together into string.
};


//in one line
var reverseWords = function(s) {
    return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
}
