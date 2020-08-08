//Given an array of temperatures, find the temperature that is closest to 0
//If there is a negative and positive ver of the integer, return the positive one
//If no temperature is given, return 0

let diffMin = Infinity;
let diff = 0; //subtract diff and get the smallest diff
let findClosestTemp = (N, inputs) => {
  if (N === 0){return "0";} //base case
  for (let i = 0; i < N; i++) {
      const t = parseInt(inputs[i]);
      let temp = t;
      if (Math.sign(temp) === -1){ temp = t*-1 }
      diff = temp;
      if (diff < diffMin ) {
         diffMin = diff;
      }
        //  console.log("diffmin: " + diffMin);
  }
  
  //check here to change return value
  if (inputs.includes(diffMin*-1) && inputs.includes(diffMin)) { 
      console.log("inputs has dup negative") ;
      return "the closest temp is " + diffMin;
  } else if(inputs.includes(diffMin*-1) && !inputs.includes(diffMin)) {
      return "the closest temp is " + diffMin*-1;
  } else {
    return "the closest temp is " + diffMin;
  }
}

console.log(findClosestTemp (10, [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5]));
console.log(findClosestTemp (5, [1, -2, -8, 4, 5]));


