
var longestPalindrome = function(s) {
  var max = '';
  //goig from left and right record the letters into max.
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account 
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;

      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
        
    }
  }
  return max;
};

/**
 * 
 * @param {0  left: r
0  right: r
left after while; -1
updated to max:  r
0  left: r
1  right: a
left after while; 0
1  left: a
1  right: a
left after while; 0
1  left: a
2  right: c
left after while; 1
2  left: c
2  right: c
left after while; 1
2  left: c
3  right: e
left after while; 2
3  left: e
3  right: e
left after while; 2
3  left: e
4  right: e
left after while; -1
updated to max:  raceecar
4  left: e
4  right: e
left after while; 3
4  left: e
5  right: c
left after while; 4
5  left: c
5  right: c
left after while; 4
5  left: c
6  right: a
left after while; 5
6  left: a
6  right: a
left after while; 5
6  left: a
7  right: r
left after while; 6
7  left: r
7  right: r
left after while; 6
7  left: r
8  right: undefined
left after while; 7} s 
 */




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