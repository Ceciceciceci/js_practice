
/** * * * * * * * * * * * * * * * * * * 
 * 48. Rotate Image https://leetcode.com/problems/rotate-image/
* * * * * * * * * * * * * * * * * * * */

/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //we will be using two swaps.
    //First you wil double loop for each swap to traverse
    //1st swap: Swapping diagonally.
    //swap(matrix[i][j], matrix[j][i])
    
    let mL = matrix.length;
    for (let i = 0; i < mL; i++){
        for(let j = i; j < matrix[0].length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    //second swap but across, simultaneously closing in to the center
    //swap(matrix[i][j], matrix[i][mL - 1 - j])
    //divide in second loop by two because you only need to swap till the center
    for (let i = 0; i < mL; i++){
        for(let j = 0; j < mL/2; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][mL - 1 - j];
            matrix[i][mL - 1 - j] = temp;
        }
    }
    return matrix;
};