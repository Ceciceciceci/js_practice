/*
204. Count Primes https://leetcode.com/problems/count-primes/
*/
/**
 * Count the number of prime numbers less than a non-negative number, n.
Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 */

 /**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    //https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    var count = 0;
    if(n === 0 || n ===1 || n === 2) {return count;} //base case
    
    var array=[]; //array to store the value, the sieve
    for(i = 2; i < n; i++) {
        if (array[i]) { continue; } //if the value is marked not a prime, continue
        else { count++; } // if it hasn't been marked prime yet, add to count
        for(j = i + i; j <= n; j += i) {
            array[j] = true; //check the next value 
        }
    }
    return count;
};


//using square root to get prime
//https://en.wikipedia.org/wiki/Prime_number#Trial_division
//Filter all numbers off of arr that are not prime by subjecting 
//each element to the “trial division test” which “consists of dividing n 
//by each integer m that is greater than 1 and less than or equal to the 
//square root of n”. This test returns false if any number less than the 
//element being operated on (m) produces no remainder when said element (n) 
//is divided by it.
var isPrime = function(n) {    
    const stop = Math.sqrt(n);
    for (let i = 2; i <= stop; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

var countPrimes = function(n) {
    let count = 0;
    while (n--) {
        if (isPrime(n)) {
            count++;
        }
    }
    return count;
};

//by doing 
var isPrime = function(n) {    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n !== 1 && n !== 0;
}

var countPrimes = function(n) {
    let count = 0;
    let i = 1;
    while (i <= n) {  //loop to check all numbers lesser than or equal to the given number
      if (isPrime(i)) { //if a number is prime
        count++;
      }
      i++; //increment to next number
    }
    return count;
};