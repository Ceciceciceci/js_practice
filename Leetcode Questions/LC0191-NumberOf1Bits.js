/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    
    while(n != 0) {
        sum += n & 1;
        n = n >>> 1; //shift bits
    }
    
    return sum;
};


//using regex
var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g, '').length
};