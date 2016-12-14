// Given an array of integers, remove the smallest value. If there are multiple
// elements with the same value, remove the one with a lower index. If you get an
// empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  // copies the array
  var sorted = numbers.slice(0);

  // sort the new array, asc
  sorted.sort(function(a, b){return a - b})

  // get the index of the first key with the lowest value
  var lowestIndex = numbers.indexOf(sorted[0]);

  // remove low number from array
  numbers.splice(lowestIndex, 1);

  // remove the array item that first matches the lowest value
  return numbers;
}

// Better: use Math.min to get minimum
