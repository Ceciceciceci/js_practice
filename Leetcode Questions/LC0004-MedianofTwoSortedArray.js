/*
4. Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/


//this is not optimal for large arrays of like 100+ elements
var findMedianSortedArrays = function(nums1, nums2) {
    //concat the arrays and sort them with js function
    const totalArr = nums1.concat(nums2).sort((a,b) => {return a-b});
    
    //get the middle of the entire array
    const median = (totalArr.length - 1) / 2;
    //calc the remainder to see if the median is even or odd
    const remainder = median % 1;
    if (remainder){ 
        //if there is a remainder , that means the length is even
        // get the first median number and the number next to it
        // add together, divide by 2
        const m1 = median - remainder;
        const m2 = m1 + 1;
        return (totalArr[m1] + totalArr[m2])/2;
    } else { // remainder = 0
        return totalArr[median];
    }
    
};


//OPTIMAL FOR LARGER ARRAYS
/**
 * I will approach this by dividing and checking. 
 * So say you could chose a partition for each array given. and do a decrement or increase if the middle is not found.
 * Because you know that the middle is supposed to have even numbers both sides the partion will be balancing that.
 * You will keep checking if the left min of one array is less than the numbe ron the max righ tside of the second and 
 * the same on the opposide min L y < max R x 
 * if they both return true then you have found the median and right partition, then calc median there regularly. 
 * 
 */

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) { return findMedianSortedArrays(nums2, nums1);}
        
    //time to set the variables needed
    let x = nums1.length;
    let y = nums2.length;
    let low = 0;
    let hi = x;

    while (low <= hi){ //length of x will always be the boundary
        //set partitions
        let partX = Math.floor((low + hi) / 2);
        let partY = (Math.floor(((x + y + 1) / 2) - partX));
        
        //do our split comparisons, if part X is 0 that eans nothing is on th eleft so set to infinity
        let maxLeftX = (partX == 0) ? Number.NEGATIVE_INFINITY : nums1[partX - 1];
        let maxLeftY = (partY == 0) ? Number.NEGATIVE_INFINITY : nums2[partY - 1];
        
        let minRightX = (partX == x) ? Number.POSITIVE_INFINITY : nums1[partX];
        let minRightY = (partY == y) ? Number.POSITIVE_INFINITY : nums2[partY];
        
        //make the comparisons and move partition accordingly if needed to
        if ( maxLeftX <= minRightY && maxLeftY <= minRightX){
            if ((x+y)%2 == 0 ){
                console.log("in here")
                //check for even length
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2;
            } else { return Math.max(maxLeftX, maxLeftY); }   
        
        } else if (maxLeftX < minRightY){
        low = partX + 1;
        } else {
            hi = partX - 1;
        }
    }
}
