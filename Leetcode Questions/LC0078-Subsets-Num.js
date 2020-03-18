

/*
78. Subsets https://leetcode.com/problems/subsets/
*/

/**
 * Given a set of distinct integers, nums, return all possible subsets 
 * (the power set)
   Note: The solution set must not contain duplicate subsets.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */

//doing it the same way as Combination Sums 
//using a recursive function
var subsets = function(nums) {
    let result = [];
    dfsCheck(nums, result);
    return result;   
}

let dfsCheck = (nums, result, combo=[], index = 0) => {
    result.push(combo);
    
     for(let i = index; i < nums.length; i++){
         //by concatting, you are making a deep copy of combo each time.
         dfsCheck(nums, result, combo.concat(nums[i]), i+1);
     }
    console.log("result: " + result);
}

//how it would look like:
/* [1,2,3] given
result.push(combo);
result: [[]]

for loop:
index: 0,  0 < 3; ++
    combo.concat(nums[i]) -> result[[],[1]]
    etc. [][1][2]
         [][1][1,2](concat)[2]  
*/