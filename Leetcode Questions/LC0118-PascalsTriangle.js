// First off, account for the base case of [[1]] (we need at least one line to buid off of)
// Now all we need to do is build each next line, taking the sum of the previous line in a sliding-window fashion
// And placing 1s at the beginning and the end by checking first to see if an array exists and accounting for where res[i][j+1] overflows, respectively
// This way when it gets to the end of the previous line, it will take the 1 and res[i][j+1] will default to 0
// var generate = function(numRows) {
//     let res = !numRows ? [] : [[1]]
	
//     for (let i=0; res.length < numRows; i++) {
//         for (let j=-1; j < res[i].length; j++) {
//             res[i+1] = res[i+1] ? [...res[i+1], res[i][j] + (res[i][j+1] || 0)] : [1]
//         }
//     }
//     return res
// }


//since the answer is a 2d array, yyou will have O(n^2)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var pascal = []; //set variable to save results in 
    for (var i = 0; i < numRows; i++) { //loop through the numRows  needed 
        pascal[i] = []; //set the first 0 around as [] empty array
        pascal[i][0] = 1; //the first value will always be 1  so set that first
        for (var j = 1; j < i; j++) { //now loop through again and make sure to start at 1 so that it will populat from index 1 and not 0
            //grab the cordinates of 
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1; //add on the 1 at the end 
    }
    console.log(pascal);
    // return pascal;
};

generate(4);

