/*
186. Reverse Words in a String II 
https://leetfree.com/problems/reverse-words-in-a-string-ii.html
*/

/*
Given an input string, reverse the string word by word. 
A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces 
and the words are always separated by a single space.
For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?
*/


return s.trim()                   //trim the white space around
        .replace(/\s+/g, " ")     //replace the extra spaces inside
        .split(" ")               //split and turn the string into array
        .reverse()                //reverse it
        .join(" ");               //join together back to string


//using filter
return s.split(' ')               //create an array of words separated based by spaces
        .filter(string => !!string) //remove empty strings to take care of extra whitespace
        .reverse()                //reverse the array of words
        .join(' ');               //join the words back together with spaces inbetween

