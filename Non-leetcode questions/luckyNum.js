
let counter =0; //save each number with lucky number
// let map = new Map();

let checkNum = (l, h) =>{
  if (l === h ){ return 0;}

  for(let i = l; i < h; i++){
      checkMap(i);
      let numArr = i.toString().split('');


      if((numArr.includes('6') && numArr.includes('8')) || (!numArr.includes('6') && !numArr.includes('8'))){
        //   map.set(i, 'false');
        continue;
      } else if(numArr.includes('6') && !numArr.includes('8')) {
          counter++;
        //   map.set(i, 'true');
      } else if(!numArr.includes('6') && numArr.includes('8')){
          counter++;
      } else {
          continue;
      }
  }
  return counter;
}

// let checkMap = (num) => {
//     if (num.indexOf())
//     //return false or true;
// }

console.log(checkNum(1, 10)); //2

console.log(checkNum(92871036442, 3363728910382456));