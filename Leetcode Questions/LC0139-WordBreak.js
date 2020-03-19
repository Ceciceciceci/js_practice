/*
139. Word Break  https://leetcode.com/problems/word-break/

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var t = []; // we will push to this table if the word at that point is true
    for (var i = 0; i< s.length; i++) {     
        for (var j = 0; j <=i; j ++ ) {  
            //create every word substr available and see                                           
            var word = s.slice(j, i + 1);    
            //if the wordDict includes it
            if (wordDict.includes(word) && (j == 0 || t[j-1] == true )) {           
                t[i] = true;                                                       
            }  
        }      
    }                                                                                                                            
    return t[s.length - 1] || false; 
};