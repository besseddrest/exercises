/*
Implement a solution nth_largest( array, n ) that takes in an array of arbitrary size and returns the nth largest element.


Eg. array = [1, 8, 4, 5, 9, 7, 2, 10, 44, 55, 67]

nth_largest( array, 2) = 55
nth_largest( array, 5) = 9

*/

var arr = [1, 8, 4, 5, 9, 7, 2, 10, 44, 55, 67];

function getNthLargest(arr, n) {
  
  // sorting numbers requires a compareFunction
  arr = arr.sort(
    function compareNumbers(a, b) {
    return b - a;
  });
  
  return arr[n - 1];
}

console.log(getNthLargest(arr, 2));

/* 
what I learned:
- complexity? Not constant because of sort()
- compareFunction required when sorting numbers
-- otherwise sort() will convert the items to a string
*/
