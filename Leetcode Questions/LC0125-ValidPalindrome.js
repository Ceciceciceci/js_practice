/*
125. Valid Palindrome  https://leetcode.com/problems/valid-palindrome/
*/

var isPalindrome = function(s) {
    //base case
	if (s == " " || s == ''){ return true; }
	//edit string
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	//make a reverse of that string
	let revStr = s.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    return (revStr === s) ? true : false;
}