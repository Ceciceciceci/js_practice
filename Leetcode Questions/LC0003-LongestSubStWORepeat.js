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

/* So what do I think about this problem.
because we want to find a solution with non repeating characters. I think I want to use a Set. A set 
can only contain unique 1 of each elements. By doing this we can eliminate having to check against 
in multiple for loops.  For this problem as well since we need to check for substrings we will 
have to move along the original string. Because we need to find the longest, we have to update the max somehow.
First you will two pointers initialized set to the beginning. they will be used to track what char has 
been added to the set.
For example pointer 2 will move first. if the chara is not in pointer 2 yet, add it to the set.
then increment pointer 2 to the next letter. if it is, we will delete from the set from pointer 1's position.

You will also need a new max variable to save to.
also here a set variable.

The boundaries that we need to put is when pointer 2 reaches the end of the string as we move.
so while (pointer 2 is less than the str length){
    if the character at pointer 2 is not in the set, add it and also UPDATE the max. 
    if the character at pointer 2 is IN the SET. then you will take pointer 1 and update
       accordingly by DELETING that character at pointer 1 from the SET. then update the
       pointer1 by 1. 

then return the max.
}
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
        //if the character at pointer2 doesn't exist in the set yet
        if (!strSet.has(s.charAt(pointer2))){ 
            strSet.add(s.charAt(pointer2)); //add the char value of pointer2 
            //update max
            max = Math.max(max, strSet.size); 
            pointer2++; //shift the right pointer to the next letter
        } else {
            strSet.delete(s.charAt(pointer1)); //delete the value at pointer1 if the set already has, is dup
            pointer1++; //shift the left pointer to the next letter
        }
    }
    return max;
    
};

console.log(lengthOfLongestSubstring("bbbbb")); //b
console.log(lengthOfLongestSubstring("pwwkew")); //wke
console.log(lengthOfLongestSubstring("abcabcbb")); //abc