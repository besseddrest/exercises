/**
 * @param {number[]} nums
 * @return {number}
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 */
var removeDuplicates = function(nums) {
  if (nums.length == 1)
    return nums;

  // keep track of last value
  let last;
  for (let i = nums.length - 1; i > -1; --i) {
    // if current number matches last, remove item
    if (nums[i] === last && nums.length > 1)
      nums.splice(i, 1);
    // set new last number
    last = nums[i];
  }

  return nums;
};

console.log(removeDuplicates([1,2]));
