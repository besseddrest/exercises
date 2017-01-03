/*
Given an unsorted array, write a method that would return the array with no duplicates. (i.e. [4,6,3,2,6,5,4,8])

[4,6,3,2,6,5,4,8]
[4,6,3,2,5,8]

input: array
output: array no dupes

iterate over and push to new array

if the value already is in the array, don't push

return new array

*/

function removeDupes(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++){

    // if value is NOT in newArr
    if (newArr.indexOf(arr[i]) === -1){
      newArr.push(arr[i]);
    }

  }

  return newArr;
}

// ES6
function removeDupes2(arr) {
  return arr.filter((element, index, arr) => arr.indexOf(element) == index);
}


var numbers = [4,6,3,2,6,5,4,8];
console.log(removeDupes2(numbers));
