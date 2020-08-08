// Read inputs from Standard Input (use readline()).
// Write outputs to Standard Output (use print()).

var n = readline();
let timeArr = [];

for (var i = 1; i <= n; i++) {
    timeArr.push(readline());
}
let fastest = "";
let currFastSec = Infinity;
//calc the seconds of each time
for (let i = 0; i < timeArr.length; i++){
    let time = timeArr[i].split(':');
    let seconds = ((+time[0]) * 60 * 60) + ((+time[1]) * 60) + (+time[2]);
    if (seconds < currFastSec){
        currFastSec=seconds;
        fastest = timeArr[i];
    }
}
print (fastest);

