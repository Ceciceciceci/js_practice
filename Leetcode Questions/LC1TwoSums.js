/*************************************************************
 1. Two Sum: https://leetcode.com/problems/two-sum/
*************************************************************/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //shorter version of ver 2
//same time complexity in general
 var twoSum = function(nums, target) {
     let map = {};
     for (let i = o; i < nums.length; i++){
         if (map.hasOwnProperty(nums[i])){ //if the map has the current nums value as a key
             return [map[nums[i]], i]; //return the index where the diff was calc and the current index
         } else { 
             return map[target-nums[i]] = i //set the difference to the index for looking
         }
     }
 }


//Ver 2: O(n) time, hashmap looks once 
//What this will do is map the differences. 
//Calc wise you take the target and subtract the index value which should give you the other number.
//Then check if the iterating index value exists in the map as a key for lookup,  since you already calc the diff
// between the two numbers, the mapped index is saved for that number.
var twoSum = function(nums, target) {    
    const map = {}; //use a map to save 
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]; //calculate the difference and save it that key to compare
        
        //if the current nums value of [i] exists in map
        if(nums[i] in map){ 
            //return an array of [ the map value of the key nums[i], and the index currently ]
            console.log(map[nums[i]]);
            return [map[nums[i]], i];
        }
        else { // if doesn't exist in map yet
            //set the difference of the value to the index it was at.
            map[diff] = i; 
        }
    }    
    return map;
};


//Ver 1: O(n^2)  time two for loops
//loop through twice to cover for each index
var twoSum = function(nums, target){
    let finalArray=[]; //array to save the values
    for (let i = 0; i < nums.length; i++){ 
        for (let j = 0; j< nums.length; j++){
            // const diff = target - nums[i];
            // if (nums[j]=== diff){
            //     return [i,j];
            // } //shorter

            if( i != j ){ //if the index #i does not match the index #j
                let sum = nums[i] + nums[j]; //add value of index i and value of index j
                if (sum === target) { //check if it matches the target parameter
                    finalArray.push(i); //add to array the indexes if it does
                }
            }
        }
    }
    return finalArray;
}


// Tests:

console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([2, 5, 11, 5], 10));