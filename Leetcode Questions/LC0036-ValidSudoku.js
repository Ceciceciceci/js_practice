/* 36. Valid Sudoku
https://leetcode.com/problems/valid-sudoku/

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/

//USING MAP ONLY

var isValidSudoku = function(board) {
    const map = new Map();
    //create a map to save set numbers in a row/col or box to
    
    //we are going to loop thorugh the sudoku matrix
    for (let row = 0; row < 9; row ++) {
      for (let col = 0; col < 9; col ++) {
        const val = board[row][col];
        
        if (val === '.') continue;
        
        const keyRow = `row ${row} has ${val}`;
        const keyCol = `col ${col} has ${val}`;
        const keyBox = `box ${Math.floor(row / 3)}-${Math.floor(col / 3)} has ${val}`;
  
        if (map.has(keyRow) || map.has(keyCol) || map.has(keyBox)) return false;
  
        map.set(keyRow, true);
        map.set(keyCol, true);
        map.set(keyBox, true);
          
          
        console.log(map);
      }
    }
    
    return true;
  };


  //UISNG SET WITH MAP.. this will be faster for sure at O(1) time

// var isValidSudoku = function(board) {
//     // create an empty set for each row/col/square
//     const rowRules = new Array(9).fill().map(() => new Set())
//     const colRules = new Array(9).fill().map(() => new Set())
//     const mixedRules = new Array(9).fill().map(() => new Set())
    
//     // iterate through each cell on the board
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         const curr = board[row][col]
        
//         // some tricky math to get the index of the 3x3 squares
//         const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)
  
//         if (curr === ".") continue  // ignore dots
        
//         // if the current number already exists in the set, board is invalid
//         const a = rowRules[row].has(curr)
//         const b = colRules[col].has(curr)
//         const c = mixedRules[mixedIdx].has(curr)
//         if (a || b || c) return false
        
//         // add the number to the appropriate set
//         rowRules[row].add(curr)
//         colRules[col].add(curr)
//         mixedRules[mixedIdx].add(curr)
//       }
//     }
    
//     // all checks out
//     return true
//   };