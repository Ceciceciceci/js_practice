/***********************************
13. Roman to Integer:  https://leetcode.com/problems/roman-to-integer/
***********************************/
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //use a map first
    let romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0; //final add
    
    for (let i = 0; i < s.length; i++){
       let currRoman = romanMap[s[i]]; //grab the current 
       let nextRoman = romanMap[s[i+1]]; //save to check the next elem over
       
       //if currRoman # is < nextRoman #, subtract nextRoman from currRoman
       if(currRoman < nextRoman){ //this takes care of the 4,9, 40,90,etc cases
           result += nextRoman - currRoman;
           i++; //because it takes two chara to create a number 4 and etc. increment 
       } else {
           result += currRoman; //add to result
       }
    }    
    return result;
};

//Runtime: o(n)

//Test:
console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("MCMXCIV"));