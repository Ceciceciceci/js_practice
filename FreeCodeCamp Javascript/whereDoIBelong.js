

function getIndexToIns(arr, num) {
    if (arr.length == 0){ return 0;} //base case
    arr.sort((a,b)=> {return a-b});
    for (let i = 0; i < arr.length; i++){
       if (num <= arr[i]){
         return i;
       }
    }
  
    return arr.length;
  }
  
  getIndexToIns([2, 5, 10], 15); //return 3