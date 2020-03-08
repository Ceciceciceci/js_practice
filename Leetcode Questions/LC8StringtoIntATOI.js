/************************************************ 
8. String to Integer (atoi) Medium  https://leetcode.com/problems/string-to-integer-atoi/
*************************************************/
/*
Implement atoi which converts a string to an integer.
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
If no valid conversion could be performed, a zero value is returned.

Note:
Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
Example 1:
Input: "42"
Output: 42

Example 2:
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.

*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    let newStr = str.trimLeft(); // 1.) cut all the white space in front
    let foundFirstNum = false; //need this to find out if okay to move on other wise return 0;
    let sign = undefined; //save for plus and minus at the end 
    let i = 0;
 
    // 2.) LOOP THROUGH THE STR
    let finalStr = '';
    for (i = 0; i < newStr.length; i++){
        // 3.) DETECT IF NUMBER OR NOT FIRST 
        //take care of 0 case first
        if (!foundFirstNum){
             // 4.) CHECK IF PLUS/MINUS
            if (newStr[i] == '+'){
                console.log("found plus: " + newStr[i]);
                sign = false;
                foundFirstNum = true;
                continue; //if you see a sign, skip adding it
             } 
            if (newStr[i] == '-'){
                console.log("found minus: " + newStr[i]);
                sign = true;
                foundFirstNum = true;
                continue; //if you see a sign, skip adding it
            } 
            // 5.) WE FOUND A DIGIT
            if (parseInt(newStr[i]) >= 0){ // if a digit
                console.log("found first digit: " + newStr[i]);
                if(sign === undefined){ sign = false; }
                foundFirstNum = true;
                finalStr += newStr[i];
                continue;
            }
            // 6.) IF NOT, RETURN 0
            return 0; //if not a digit on the second index, return 0;
        } else {
            // 7.) START CHECKING THE NEXT DIGIT
            if (parseInt(newStr[i]) >= 0){
                finalStr += newStr[i];
            } else {
                // 8.) IF NOT DIGIT, WE OUT
                break;
            }
        }
    }
    
    // 9.) change str to number
    let finalNum = Number(finalStr);
    // 10a.) if the str is out of bounds
    if (!sign && finalNum > Math.pow(2,31)-1){
        console.log("a");
        return Math.pow(2,31) - 1;
    }
    if (sign && finalNum > Math.pow(2,31)-1){
        console.log("b");
        return -Math.pow(2,31);
    }
    
    // 10b.) check if negative or positive if not out of bounds
    if (sign == true){
        return -finalNum;
    }
    
    return finalStr;
};


//TESTS:
console.log(myAtoi("40"));
console.log(myAtoi("   -42"));
console.log(myAtoi("-0012.42"));