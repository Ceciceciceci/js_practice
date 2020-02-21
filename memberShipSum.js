/*
Question: Your company assigns each customer a membershipID, 
and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each
membership ID. If the result of the sum is a number with more than 
a single digit, another iteration is required, and the digits of the
result also should be added together. This process should repeat
until a single-digit number is calculated. 

For example, for the membership ID "55555" the sum of all digits is
25. Because this is not a single-digit number, 2 and 5 would be 
added, and the result, 7, would be the check digit.
*/



//-- TRY 1 using two functions to callback, however this does not iterate twice to pass the test
/*function createCheckDigit(membershipId) {
    var memberArry = (membershipId + '').split('').map((i) => { return Number(i); });
    //the firs part ( + '') will turn it into a string, .split works on string, then map it to turn each one into a number
    //this will split into [5,5,5,5,5]
    var memberIdLen = memberArry.length;
    
    let sum = 0;
    for (i=0; i < memberIdLen; i ++){
       sum += memberArry[i];
      console.log('total: '+ sum);
    } //should be good if sum is not more than 10 which is the lowest double digit.
    console.log(calcSum(sum));
    return sum;
  }
  
  function calcSum(sumNum){
    var newArry = (sumNum + '').split('').map((i) => { return Number(i); });
    let newSum = 0;
    for (i=0; i < newArry.length; i ++){
        newSum += newArry[i];
    }
    console.log(newSum);
    return newSum;
  } 
*/

//try 2, recusive call the function again if sum is still greater than 9  
  function createCheckDigit(membershipId){
    var memberArry = (membershipId + '').split('').map((i) => { console.log("III: " + i); return Number(i); });
    //the first part ( + '') will turn it into a string, .split works on string, then map it to turn each one into a number
    //this will split into [5,5,5,5,5]
    var memberIdLen = memberArry.length;
    
    let sum = 0;
    //loop though the array and add the numbers together
    for (i=0; i < memberIdLen; i++){
       sum += memberArry[i];
      //  console.log('total: '+ sum);
    } 
    //should be good if sum is not more than 10 which is the lowest double digit.
    //if it still is, run this while loop and call again to iterate
    while (sum > 9) {
      console.log(sum);
      return createCheckDigit(sum);
    } 
    return sum;
  }
  //Runtime: O(n), there is no double for so it would be O(n) for, and while.

  /* What would try 3 include me doing:
     Try later: use regex to test for double digits and put it in one line.
     Double for loops are probably possible to solve this program but it
     would make the runtime slower to O(n^2).

     Test cases to write: 
         - what if user enters in letters instead with digits
            - requires regex
         - what if user enters nothing
            - check if input is null
     
  */


  //Test Cases
  console.log(createCheckDigit("1234"));
  console.log(createCheckDigit("55555555555"));
  console.log(createCheckDigit("9999999999999999999999991"));