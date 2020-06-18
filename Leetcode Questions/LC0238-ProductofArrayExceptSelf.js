/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.) 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length;
    let output = [];
    
    output[0] = 1;
    //get product of left [ x,x,x,x, l]
    for (let i = 1; i < length; i++){
        output[i] = output[i-1] * nums[i-1];
    }
    //get product of all right 
    let R = 1;
    for(let j = length-1; j>=0; j--){
        output[j] = output[j] * R; // multiple byt value before
        R = R * nums[j]; //update this so you multiply next num next to it
    }
    return output;    
};


//not O(n) space complexity

var productExceptSelf = function(nums) {
    let length = nums.length;
    let left = [];
    let right = [];
    let output = [];
    
    left[0] = 1;
    right[nums.length-1] = 1;
    output[0] = 1;
    //get product of left [ x,x,x,x, l]
    for(let i = 1; i<nums.length; i++){
        left[i] = nums[i-1] * left[i-1];
    }
    //right
    for(let j = 0; j < length - 2; j--){
        right[j] = nums[j+1] * right[j+1];
    }

    //multiple both arrays across
    for (let i = 0; i < length; i++){
        output[i] = left[i] * right[i];
    }
    return output;   
};
