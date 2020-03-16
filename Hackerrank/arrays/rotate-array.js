
// Left Rotation https://www.hackerrank.com/challenges/array-left-rotation/problem
/* A left rotation operation on an array of size n shifts eachof the array's elem 1 unit to the left. For 
for ex, if 2 left rotations are performed on array[1,2,3,4,5], then the array would become [3,4,5,1,2]. 
Given an array of n intergers and a number, d, perform d left rotations on the array. Then print the updated
array as a single line of space-separated integers.
*/
function shiftLeft(a, d){
    const newArr =[];
    //put array in to a stable unchanging one
    for (let i = 0; i < a.length; i++){
        newArr.push(a[i]);
    }
    // for this many rotations
    // shift i , and push i back to the end
    for (let i = 0; i < d; i++){
        newArr.shift(newArr.push(a[i]));
    }
    var stringArry = newArr.toString().split(',').join(' ');
    // console.log(stringArry);
}

console.log(shiftLeft([1,2,3,4,5]));