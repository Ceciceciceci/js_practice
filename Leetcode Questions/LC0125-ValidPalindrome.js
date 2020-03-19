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

//using two pointers going to the middle
var isPalindrome = function(s){
    //edit string 
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    s = s.toLowerCase();

    //set two pointers
    let start = 0;
    let end = s.length - 1;
    //white start pointer is < than the end point index
    while (start <= end) {
        //if the letter at start pointer != letter at end pointer
        if (s[start] != s[end]) {
            return false;
        }
        //increment if no problem
        start++;
        end--;
    }
    return true;
}