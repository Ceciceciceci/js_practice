/**
 * 384. Shuffle an Array
 * https://leetcode.com/problems/shuffle-an-array/
 * 
 * @param {number[]} nums
 */
var Solution = function(nums) {
    let arrNums = [];
    for(i in nums){
        arrNums.push(nums[i]);
    }
    this.nums = arrNums;
    // this.arrNums = new Array(...nums)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arrNums = [...this.nums];
    for (let i = arrNums.length-1; i > 0; i--){
        let j =  Math.floor(Math.random() * Math.floor(i+1));
        let temp = arrNums[i];
        arrNums[i] = arrNums[j];
        arrNums[j] = temp;
    }
    return arrNums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */