/***********************************************
17. Letter Combinations of a Phone Number https://leetcode.com/problems/letter-combinations-of-a-phone-number/
***********************************************/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.


//Time complexity O(n^2)
//Could do this in O(n^3) as well if you decide to loop through the letters and then loop through the numbers and then loop through again to check count
var letterCombinations = function(digits) {
    if (!digits) return [];

    const phone = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    let combinations = ['']; //use this to store the combined values

    for (const digit of digits) {
        const letters = phone[digit]; //get the value of the digit key ex. '2' = 'abc'
        let temp = [];

        for (const letter of letters) { //loop through the current letters 'abc'
            //map the combinations string to each letter -> now combinations is ['a', 'b', 'c']
            temp = temp.concat(combinations.map(s => s + letter)); //concat it together to temp 'abc'
        }
        combinations = temp; //set combinations to temp.
    }

    return combinations;
};

console.log(letterCombinations('23'));