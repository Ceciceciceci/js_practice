/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //base case  
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    //set up the variables for going from top right 
      let i = 0;
      let j = matrix[0].length - 1;

      while (j >= 0 && i < matrix.length) {
          console.log(matrix[i][j]);
        if (matrix[i][j] === target) return true;
          //if the value right now is bigger than target then go back one row
        else if (matrix[i][j] > target) j--;
          //because it is sorted, if the numbered target is greater than the last value in the current row you can increase the row over
        else i++;
      }

      return false;
};