/*
189. Rotate Array  https://leetcode.com/problems/rotate-array/
*/
/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {  
    if(k == 0){
        return nums.length;
    }
    k = k % nums.length; //do this to calculate for k > the length of the array
    let diff = Math.abs(nums.length - k); //calc # of items to shift from the front
    while (diff > 0){  //while decrement diff and diff is greater than 0 
        nums.push(nums.shift()); //shift out from the front, push it to the back
        diff--;
    }
    return nums.length; //return the array
};


var rotate = function(nums, k) {  
    if(k == 0){
        return nums.length;
    }
    k = k % nums.length; //do this to calculate for k > the length of the array
    while (k > 0){  //while decrement diff and diff is greater than 0 
        nums.unshift(nums.pop()) //pop out at the back and push it in the front
        k--;
    }
    return nums.length; //return the array
};