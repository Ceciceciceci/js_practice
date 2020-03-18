
// Return all possible substrings of a string given 

function getAllSubstrings(str) {
    let i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        //set j = i so that you don't get empty substring each loop
        //set str.length + 1 so that you can compare with the last element
        //    as well because you're always splicing,shortening the length in consequence
        for (j = i + 1; j < str.length+1; j++) {
            //push to the result the sliced range (starting position, # of letters after);
            result.push(str.slice(i, j)); 
            console.log(result);
        }
    }
    return result;
  }
  
  console.log(getAllSubstrings("somestring"));