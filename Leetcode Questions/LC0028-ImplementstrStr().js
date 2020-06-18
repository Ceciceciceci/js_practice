/*
28. Implement strStr()
https://leetcode.com/problems/implement-strstr/
*/
/*
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.
*/

//Method 1
// using char At and substring to compare string by substring
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return 0
    for (let i = 0; i < haystack.length; i++) {
        const isEqual = haystack.substring(i, i + needle.length) === needle
        if (haystack.charAt(i) === needle.charAt(0) && isEqual) return i
    }
    return -1
};


//use just the indexOf and it will return the first index of finding
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
}


//using two for loops
// O(n^2)

const strStr = (haystack, needle) => {
    let hl = haystack.length;
    let nl = needle.length;
    //base case
    if((!haystack && !needle) || needle === '' || needle === haystack ) { return 0; }
    if((!haystack && needle) || (haystack.length < needle.length)) { return -1; }

    //general
    //loop through the haystack first and compare to each for needle str
    for (let i = 0; i < hl; i++){
        //as soon as you see the first character that matches the needles first letter
        if (haystack[i] === needle[0]){
            //loop through needle
            for (let j = 0; j < nl; j++){
                //compare the letters to check if the same
                if (haystack[i+j] !== needle[j]){
                    // check if the chara match from the haystack start loop vs the needle's loop over the letters
                    break;
                } else if (j === needle.length-1){
                    //after looping the entire needle and all of the characters matched
                    //return the index of the 1st chara of haystack where the loop started
                    return i;
                }
            }
        }

    }
}