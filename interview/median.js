// Given sorted arrays, find the median value of them
// odd elements, the median is (n-1)/2
// even elements, median is two middle elements

const arr1 = [1,2,3,4,5,6,7,8,9]; // odd 9
const arr2 = ['hello', 'the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']; // even 10

function findMedian(arr) {
  const length = arr.length;
  let median;

  if ( length % 2 != 0 ) {
    // odd
    median = ( length - 1 ) / 2;
    return arr[median];
  } else {
    // even
    median = length / 2;
    return [ arr[median - 1], arr[median]];
  }
}

console.log(findMedian(arr1)); // 5
console.log(findMedian(arr2)); // ['fox', 'jumped']
