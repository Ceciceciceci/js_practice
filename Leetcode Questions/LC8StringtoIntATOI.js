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
    
    //discard any white space
    //use regex 
    const regExLetters = new RegExp(/[A-Za-z]/g);
    const regExPlusMinus = new RegExp(/^[+-]?$/);
    const regExSpecialChara = new RegExp(/[\s~`!@#$%\^&*=[\]\\';,/{}|\\":<>\?()\._]/g);
    const regExDigit = new RegExp(/\d/);
    strArray = str.replace(/\s/g, ''); //replace all the white space first
        console.log("strArray: " + strArray);
    
    let finalStr = '';
    for (let i =0; i < strArray.length; i++){
        //if detect a letter, stop; if detect a non digit 
        //take care of 0 case first
        if (regExLetters.test(strArray[0]) || regExSpecialChara.test(strArray[0]) || (regExPlusMinus.test(strArray[0]) && !regExDigit.test(strArray[1])) ){
            console.log("testing if first chara a letter or special chara or there is a second plus minus");
            finalStr = 0;
            break;
        }

        //test if there a plus or minus first, and that there is not a second one
        if (regExPlusMinus.test(strArray[0])){
            console.log("testing first charac is plus minus");
            finalStr += strArray[0];
        }
        //if the digit is a 0 in the beginning skip it 
        if (strArray[i]===0){
            console.log("I see a 0;")
            i++;
        } else {
            //for letters and symbols in between
            console.log("cuur i: " + strArray[i] + "  current finalStr: " + finalStr);
            if (!regExLetters.test(strArray[i]) && !regExDigit.test(strArray[i]) && !regExPlusMinus.test(strArray[i])){
                console.log("we've hit a symbol in the mid");
                if (finalStr.length === 0) { return 0; }
                break; //exit the for loop, do not add any more letters
            } else if (regExDigit.test(strArray[i])) { //test if digit next
                console.log("curr chara: "  + strArray[i]);
                finalStr += strArray[i];
            }
        }
    }
    
    //if the str is out of bounds
    if (finalStr < -(Math.pow(2,31))){
        return -Math.abs(Math.pow(2,31));
    } 
    //if the final str length is 0 or the str has a letter  final check
    //set finalstr to 0;
    if (finalStr.length === 0 || !regExDigit.test(finalStr)){
        console.log("no digit was found");
        finalStr = 0;
    }
    console.log("final: " + finalStr);
    return finalStr;
    
};

console.log(myAtoi("40"));
// console.log(myAtoi("-0012.42"));