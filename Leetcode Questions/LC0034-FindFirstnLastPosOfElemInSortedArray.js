/**
 * 34. Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


//using two pointers, we inch closer the middle since 
// you need a start and end 

var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let foundLeft = false;
    let foundRight = false;

    while (start <= end && (!foundLeft || !foundRight)) {
        if (nums[start] !== target) {
            start++
        } else {
            foundLeft = true
        }

        if (nums[end] !== target) {
            end--
        } else {
            foundRight = true
        }
    }
    return foundLeft && foundRight ?  [start, end] : [-1, -1]
}

//first try

var searchRange = function(nums, target) {
    let foundStart, foundEnd = false;
    let start = 0;
    let end = nums.length;
    
    //base case if not in nums
    if (!nums.includes(target)){
        return [-1, -1];
    }
    //base case if only 1 element
    if (nums.length == 1){
        return [0, 0];
    }
    
    while ((start <= end) && (!foundStart || !foundEnd)){
        if (nums[start] !== target){
            start++;
        } else {
            foundStart = true;
        }
        
        if (nums[end] !== target){
            end--;
        } else {
            foundEnd = true; 
        }
        
    }   
    if (foundStart && foundEnd){
        return [start, end];
    }
};