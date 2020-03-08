/****************************************
3. Longest Substring Without Repeating Characters
****************************************/
/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //Base case
    if (s.length === 0 || s.length === 1){
        return s.length;
    }
    
    //sliding window method
    //INITIALIZE
    //2 pointers, a new set, and a max to update max length
    let pointer1 = 0;
    let pointer2 = 0;
    let strSet = new Set(); //add to this along the way
    let max = 0;
    while(pointer2 < s.length){
        //if the 
        if (!strSet.has(s.charAt(pointer2))){ 
            strSet.add(s.charAt(pointer2)); //add the char value of pointer2 
            //update max
            max = Math.max(max, strSet.size); 
            pointer2++; //shift the right pointer to the next letter
        } else {
            strSet.delete(s.charAt(pointer1)); //delete the value at pointer1 if found dup,
            pointer1++; //shift the left pointer to the next letter
        }
    }
    return max;
    
};

console.log(lengthOfLongestSubstring("bbbbb")); //b
console.log(lengthOfLongestSubstring("pwwkew")); //wke
console.log(lengthOfLongestSubstring("abcabcbb")); //abc