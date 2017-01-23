// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

// combine arrays
// sort
// get diff btwn arr[0] and arr[length - 1]
// divide diff by 2
// add result to arr[0]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var allNums = nums1.concat(nums2);
  allNums.sort(function(a,b){ return a - b});

  // even or odd
  var length = allNums.length;

  if (length % 2 == 0) {
    // even
    var median = length / 2;

    // get diff of median numbers
    var halfDiff = (allNums[median] - allNums[median - 1]) / 2;

    return allNums[median - 1] + halfDiff;
  } else {
    // odd
    return allNums[(length - 1) / 2];
  }
};
