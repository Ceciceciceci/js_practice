/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let result = []; //final result
    //1.) Sort the array first
    nums.sort((a,b) => a-b);
    
    // 2.) we need 2 pointers to check sliding window
    let left = 0;
    let right = nums.length - 1;
    
    //loop through now
    for (let i = 0; i < nums.length; i++){
        left = i + 1; //start index after curr for left
        right = nums.length - 1; // we want to reset right when results found
        let sum = 0; // we want to check if the sum is equal to 0 of all three pters, i, left, right
        
        if (i>0 && nums[i] === nums[i-1]) { continue; }
        
        while (left < right){ // the while loop to make sure right doesn't overlap left thus avoiding duplicates
            //calc sum
            sum = nums[i] + nums[left] + nums[right];
            //check sum = 0
            if (sum === 0){
                result.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;
                
                //need to check for duplicates left and right previous indexes and move again
                while(left < right && nums[left] === nums[left-1]) { left++; }
                while(left < right && nums[right] === nums[right+1]) { right--; }
                
            } else if (sum > 0) {
                right --;
            } else {
                left ++;
            }
        }  
    }
    return result;
};