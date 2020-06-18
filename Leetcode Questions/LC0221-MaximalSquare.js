/**
 * 221. Maximal Square
 * https://leetcode.com/problems/maximal-square/
Given a 2D binary matrix filled with 0's and 1's, 
find the largest square containing only 1's and return its area.

Example:

Input: 
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
 */

var maximalSquare = function(matrix) {  
    //base check
    if (matrix.length == 0){ return 0; }
    
    //set variables
    let max = 0; // this is updated everytime a 1 is found
    let rows = matrix.length;
    let cols = matrix[0].length;
    let tempArr = [];
    //fill tempArr
    for (var i = 0; i < rows; i++) {
        tempArr.push([i]);
        for (var j = 0; j < cols; j++) {
            tempArr[i][j] = 0;
        }
    }

    //check if the first row has any 1s
    for ( let i = 0; i < rows; i++){
        //if the matrix at that index is 0 return 0 else return 1
        tempArr[i][0] = (matrix[i][0] == "0") ? 0 : 1;
        //saving the new max if the index is 1 
        max = Math.max(max, tempArr[i][0]);
    }
    
    //do the same thing with the first col
    for ( let i = 0; i < cols; i++){
        //if the matrix at that index is 0 return 0 else return 1
        tempArr[0][i] = (matrix[0][i] == "0") ? 0 : 1;
        //saving the new max if the index is 1 
        max = Math.max(max, tempArr[0][i]);
    }
    
    //now do it for the rest of the matrix
    //check the left adjcent, left up adjacent, top adjacent
    /*
      x x
      x 1
    */
    for (let i = 1 ; i < rows; i++){
        for (let j = 1; j < cols; j++){
          if ( matrix[i][j] == "1"){
            tempArr[i][j] = Math.min(tempArr[i][j-1], tempArr[i-1][j-1], tempArr[i-1][j]) + 1;
            max = Math.max(max, tempArr[i][j]);
          }
        }
    }
    
    return max * max;
    
};