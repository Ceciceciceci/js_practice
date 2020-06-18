/**
 * 387. First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
 

Note: You may assume the string contain only lowercase English letters.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 0) { return -1;}
    //save in map first
    let charMap = new Map();
    
    let counter = 0;
    for (let i =0; i< s.length; i ++){
        if (!charMap.has(s.charAt(i))){
            charMap.set(s.charAt(i), {counter: 1, index: i});
        } else {
            charMap.get(s.charAt(i)).counter++;
        }
    }
    let index = 0;
    for (let [letter, key] of charMap){
        if (key.counter === 1){
            index = key.index;
            return index;
        }
    }

    return -1;
};