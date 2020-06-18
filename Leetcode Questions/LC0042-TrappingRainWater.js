/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * Given n non-negative integers representing an elevation map where the width 
 * of each bar is 1, compute how much water it is able to trap after raining.
 
 The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
 In this case, 6 units of rain water (blue section) are being trapped.

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

 */
/*
Use two pointer method closing into the middle 
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    //use window to solve
    //check if height is empty first
    if (height.length == 0  || height === null) { return 0; }
    
    //set variables
    let totalWater = 0; //to add to at the end
    let length = height.length;
    
    //to save all the max for comparison between bars
    let leftMax = []; 
    let rightMax = [];
    
    //save the. max going left to right
    leftMax[0] = height[0];
    for (let i = 1; i < length; i ++){
        leftMax[i] = Math.max(height[i], leftMax[i-1]);
    }

    //save all the max going right to left
    rightMax[length-1] = height[length-1]; //set the last value to the last index of height
    for (let j = length-2; j >= 0; j--){
        rightMax[j] = Math.max(height[j], rightMax[j+1]);
    }
    
    //TIME TO CALC the totalwater saved
    //compare the left and right values and then get the min and subtract from height @ that index
    //add it to the total
    for (let k = 0; k < length; k++){
        totalWater += ((Math.min(leftMax[k], rightMax[k])) - height[k]);
    }
    return totalWater;

};