/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 * @param {string[]} strs
 * @return {string}
 * O(n^2)
 */
var longestCommonPrefix = function(strs) {
    
    //check base case
    if (strs.length === 0){ return "";}
    
    let prefix = strs[0]; //grab the first word
    for (let i = 1; i<strs.length; i++){
        //we are going to see if we can match the strings in the array to each substr of prefix from teh end to the left
        while(strs[i].indexOf(prefix) != 0){
            //get the substr of and keep subtracting from the original till it matches
            console.log(strs[i]);
            console.log("before: " + prefix);
            prefix = prefix.substr(0, prefix.length-1);
            console.log("after: "  + prefix);
            if(prefix.length === 0 ){return "";}
        }
    }
      
    return prefix;
};

// flow
// before: flower
// after: flowe
// flow
// before: flowe
// after: flow
// flight
// before: flow
// after: flo
// flight
// before: flo
// after: fl