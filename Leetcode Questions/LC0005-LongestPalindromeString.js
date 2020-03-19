var longestPalindrome = function(s) {
    // Approach: Expand Around Center
     let max = '';
     for (let i = 0; i < s.length; i++) {
       // second loop is needed because
       // palindrome can be like 'aba' and 'abba'
       for (let j = 0; j <= 1; j++) {
         let left = i;
         let right = i + j;
         while (left >= 0 && s[left] === s[right]) {
           left--;
           right++;
         }
         // note that we decrement start(left) and increment end (right)
         // during the last while loop
         // so we need to take into account of that
         left += 1;
         right -= 1;
         if (right - left + 1 > max.length) {
           // .substring extracts the characters in a string 
           // between "start" and "end", 
           // not including "end" itself
           max = s.substring(left, right + 1);
         }
       }
     }
     return max;
   };

/**
 * recursive call
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return "";
    
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        const oddPalindrome = getPalindrome(s, i, i);
        const evenPalindrome = getPalindrome(s, i - 1, i);
        
        longest = longest.length < oddPalindrome.length ? oddPalindrome : longest;
        longest = longest.length < evenPalindrome.length ? evenPalindrome : longest;
    }
    
    return longest;
};

var getPalindrome = function(s, l, r) {
    let i = 0;

    while (s[l - i] && s[l - i] === s[r + i]) {
        i++;
    }

    i--;
    
    return s.slice(l - i, r + i + 1);
}