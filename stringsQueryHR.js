//Question: https://www.hackerrank.com/challenges/sparse-arrays/problem#

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    let queryFinished = []; //put all number of strings found for each query
    let count = 0; //counter to count how many queries found.
    // Testing one query, small case
    queries[0];
    queryFinished.push(queries[0]);
    for (let s = 0; s < strings.length; s++){
        if (queries[0] === strings[s]){
            count++;
        }
    }
    queryFinished.push(count);
    
    // test 2
    for (let q=0; q < queries.length; q++){
        for (let s = 0; s < strings.length; s++){
            if (queries[q] === strings[s]){
                count++;
            }
        }
        queryFinished.push(count);
        count = 0;
    }
    return queryFinished;
}

//test 3
var matchingStrings = (strings, queries) => queries.map(q => strings.filter(s => s === q).length);

console.log(matchingStrings(['ab', 'abc', 'dfjesk', 'abc','ba', 'ab'],[ 'ab', 'abc', 'ba'])); //return [2, 2, 1]