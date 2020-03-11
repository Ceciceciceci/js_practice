/*************************************************
 20. Valid Parenthesis https://leetcode.com/problems/valid-parentheses/?
**************************************************/
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
/** You can do this problem using if else in a for loop with no map as well  */

var isValid = function(s){
    if(!s) {return true;}

    let stack =[];// use this push the left parenthesis into this to match with end parenthesis
    const paraMap = new Map([
        ["(", ')'],
        ["[", "]"],
        ["{", "}"]
        //map them so that you can compare values to the ending pararenthesis
    ])

    for (let i =0; i < s.length; i++){
        if(paraMap.has(s[i])){ //if the left pararenthesis exists in the map as the key
            stack.push(s[i]); //push into the stack
        } else {
            let item = stack.pop(); //grab the last parathesis added to the stack
            //ex '(' then get the value of para in the map which should return the matching para
            if (paraMap.get(item) !== s[i]){
                return false;
            }
        }
    }
    //last check if there are any leading parathesis left without a matching one
    if (stack.length !== 0) {
        return false;
    }
    return true;
}


console.log(isValid("([)]"));
console.log(isValid("[()]"));
console.log(isValid("{[]}"));