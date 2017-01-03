// There is an array of non-negative integers.
// A second array is formed by shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.
// See more at: http://www.ardendertat.com/2012/01/09/programming-interview-questions/#sthash.xEhLMuUN.dpuf

// input: (arr1, arr2)
// output: int

// ex input: [1,4,5,6,7,2,3], [3,5,6,2,1,7]
// ex output: 4

// do we care about duplicates?
// this will handle duplicates
// we know that both arrays are almost exactly the same
// think about if we had a really large array
// array 1 is the subject here
// this is better than checking arr1[i] against all indexes of arr2

var arr1 = [1,2,3,4,5,6,7,8,9];
var arr2 = [9,8,7,6,4,3,2,1];

function getMissing(arr1,arr2){
  var sorted1 = arr1.sort();
  var sorted2 = arr2.sort();

  for (var i = 0; i < sorted1.length; i++){
    if (sorted1[i] !== sorted2[i]){
      return sorted1[i];
    }
  }
}

// ES6
function getMissing2(arr1, arr2) {
  const sorted1 = arr1.sort();
  const sorted2 = arr2.sort();

  return sorted1[sorted1.findIndex((element, index) => sorted1[index] !== sorted2[index])];
}

console.log(getMissing2(arr1, arr2));
