// 1. Find the position of first duplicate element in a string.
//use set or map

var findUnique = function(str) {
    str = str.split("");
    console.log(str);
    let nummap = new Map();
    for (let i = 0; i < str.length; i++){
        console.log(str[i]);
        // let diff = target - nums[i]; //we will save this into the map
        if(nummap.has(str[i])){ //check if the current chara exists in the map to match the difference
            return i-1; //get the befor
        } else {
           nummap.set(str[i], 1);
        }
    }
}
// tests 
// console.log(findUnique("apple"));
// console.log(findUnique("giraffe"));

// 2. Concatenate two array and find the unique element from it.
let findUniqueEle = (arr1, arr2) =>{
    let combined = [...arr1,...arr2]; //concate with spread 
    let nummap = new Map();
    // let unique = new Set(combined); 
    for (let i = 0; i < combined.length; i++){
        
    }
    console.log(unique);
}
console.log(findUniqueEle([2,3,4],[4,2,1]));

// 3. Input array [3,4,5] output array [20, 15,12]
// this is product of array except self



// 4. What is promise, how can you execute array of promise sequence by sequence- use generator concept


// 5. How to build a npm package
// npm init 