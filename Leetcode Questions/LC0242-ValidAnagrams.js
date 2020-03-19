
/*
242. Valid Anagram

Share
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

//in one line but O(log n) slow slow bc of the insertion sorts
//split the string apart completely, sort them in order, and then join them together
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};


//use a map
var isAnagram = function(s, t) {
    let map = {};
    //map all of the s' letters count into the map
    for(let i = 0; i < s.length; i ++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else map[s[i]] ++;
    }

    //map all of the t's letters count into the map
    //if this letter exists in the map, decrement to 0
    for(let i = 0; i < t.length; i ++){
        if(!map[t[i]] || map[t[i]] < 0){
            return false;
        }
        else map[t[i]] --;
    }

    //compare here, if each letter in the map is equal to 0 
    //after decrementing from t letter count mapping, then it's
    //an anagram
    for(let key in map){
        if(map[key] !== 0) return false;
    }

    return true;
};
