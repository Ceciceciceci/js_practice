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
    if (s.length === 0 || s.length === 1) {return s.length;}
    
    let longestString = [];
    //loop through string
    for(let i = 0; i < s.length; i++){
        //if the next string over does not match the curr string
        if (s[i] !== s[i+1]){
            console.log();
            // if the chara doesn't exist in the array
            if(!longestString.includes(s[i])){
                longestString.push(s[i]); //push
            } else {
                longestString.length = 0; //set the length to 0 again to reset array; //start pushing again starting with that letter
            }
        } else { //for repeat like bbbbb
            //if it doesn't exist yet in the array
            if(!longestString.includes(s[i])){
                longestString.push(s[i]); //push
            }
            break; //break out after.
        }
    }
    return longestString.length;
    // return length
};


console.log(lengthOfLongestSubstring("bbbbb")); //b
console.log(lengthOfLongestSubstring("pwwkew")); //wke
console.log(lengthOfLongestSubstring("abcabcbb")); //abc