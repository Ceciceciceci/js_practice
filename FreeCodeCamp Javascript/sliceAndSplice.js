/**
 *frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Passed
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Passed
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Passed
All elements from the first array should be added to the second array in their original order.
Passed
The first array should remain the same after the function runs.
Passed
The second array should remain the same after the function runs. 

 */

function frankenSplice(arr1, arr2, n) {
    //n is the splice index
    let finalArr = [];
    finalArr = [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)];
    console.log(finalArr)
    return finalArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);