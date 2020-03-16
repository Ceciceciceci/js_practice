/*********************************
39. Combination Sum https://leetcode.com/problems/combination-sum/
************************************/
/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 2:
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

var combinationSum = function(candidates, target) {

    let results = []; 
	//to store the results that match the target
    let combos = []; 
	//to store each combinations found each time
    let index = 0;
	//this will be used to track which number in candidates we are on
 
    //2.) Sort the candidates to prevent extra duplicates
    candidates.sort((a, b) => a - b);
    
    //3.) Next make a DFS-like function to traverse and recursive call;
    dfsToTarget(candidates, target, results, combos, index);
    return results;
    
};

//3.) cont... target will be updated in this function to calc the diff to find the other numbers
let dfsToTarget = (candidates, target, results, combos, index) => {
    
    //4.) Check: 
          //if the target diff == 0, then push the combo to results
          //if the target diff < 0, like 7 - (2,2,2,2) = -1, exit;
          //else loop through and find the next combo
               //in this else loop, don't forget to pop off the last combo to backtrack up one level 
     if(target === 0){
         results.push(combos.slice());
     } else if(target < 0){
         return;
     } else {
         for (let i = index; i < candidates.length; i++){
             const currNumber = candidates[i]; //the current number in candidates
             combos.push(currNumber); //push this number to the combo stack to use to check that branch of combinations for that number
             dfsToTarget(candidates, target - currNumber, results, combos, i);
             combos.pop(); //backtrack
         }
     }
}
//Time complexity maybe O(n!) 