/** 
 * 680. Valid Palindrome II
 * https://leetcode.com/problems/valid-palindrome-ii/
*/
/** 
Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

//using two pointers and going from the start/left and the end/right
//we will save the correction variable as well to count how many corrections needed
var validPalindrome = function(s, corrections = 1) {
    let left = 0; //set to beginning letter
    let right = s.length - 1; // set to last letter
    
    while (left < right) { //while the left pointer is to the left of right
      if (s[left] === s[right]) { //if the letter at the left is = letter at right
        left++; // traverse closer to center
        right--;
        continue;
      }
      //check for corrections is set to 0;
      if (corrections === 0) { return false; }
      
      //recursive call 
      return validPalindrome(s.slice(left, right), 0) 
        || validPalindrome(s.slice(left + 1, right + 1), 0);
    }
    
    return true;
  };