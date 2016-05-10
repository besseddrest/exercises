/*
Select Kth largest value in the array. Given an unsorted array of size n, and a value k. Select the kth largest value from the array. 

For example: 

Array is [5, 3, 9, 1], n is 4 
k = 0 => 9 
k = 1 => 5 
k = 3 => 1

0 = largest
1 = 2nd largest

input = array
output = single value

sort array
xlargest to smallest
k will be the index

*/

function getKthLargest(arr, k) {
  var sorted = arr.sort();
  
  return sorted[(sorted.length - 1) - k];
  
}

var arr = [5, 3, 9, 1];
console.log(getKthLargest(arr, 1));

// compare function is necessary for numbers in order to compare the values correctly
