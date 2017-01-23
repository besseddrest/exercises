// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var filtered = [],
      numCount = {};

  for (var i = 0; i < nums.length; i++) {
    // if we've checked this number already, skip it
    if (numCount.hasOwnProperty(nums[i])){
      continue;
    } else {
      numCount[nums[i]] = 1;
    }

    // find the number we're looking for
    var partnerIndex = nums.lastIndexOf(target - nums[i]);

    // if it exists in the original array
    if ( partnerIndex > -1 && partnerIndex != i) {
      filtered.push(i);
      filtered.push(partnerIndex);

      // return our winning pair
      return filtered;
    }
  }

  // else there is no winning set
  return false;
};
