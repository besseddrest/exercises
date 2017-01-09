// Find the maximum difference between two numbers in an array, given that the smaller number must occur before the larger number in the array.
const numbers = [4, 5, 1, 2, 3, 7, 9];

function maxDiff(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

maxDiff(numbers);
