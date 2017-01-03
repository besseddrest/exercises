/*
18. Find Even Occurring Element

Given an integer array, one element occurs even number of times and all others have odd occurrences. Find the element with even occurrences.

- See more at: http://www.ardendertat.com/2012/01/09/programming-interview-questions/#sthash.1Qq8lEk2.dpuf


input array [2,4,2,4,4,5,5,2,3,5,5,3,3]
return number 5

we know:
one element have even occurences
- we can stop here
- modulo 2 will be 0
all others are odd

iterate through elements in the array, and create a hashtable
for
check if arr[i] in hashtable

*/

function getEvenElement(arr) {
  var hash = {};
  // 0, 2: 1
  // 1, 4: 1
  // 2, 2
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    // if arr[i] is in hashtable
    if (current in hash) {
      var count = hash[current];
      hash[current] = count + 1;
    } else {
      hash[current] = 1;
    }
  }

  // now, find the value modulo 2 = 0
  for (var j in hash) {
    if (hash[j] % 2 === 0){
      return j;
    }
  }
}

// ES6
function getEvenElement2(arr) {
  const hash = {};
  // populate the hash table
  arr.forEach(element => {(element in hash) ? hash[element]++ : hash[element] = 1})
  // now, find the even value
  for (j in hash) {
    if (hash[j] % 2 === 0){
      return j;
    }
  }
}

console.log(getEvenElement([2,2,4,2,4,4,5,5,5,2,3,5,5,3,3]));
console.log(getEvenElement2([2,2,4,2,4,4,5,5,5,2,3,5,5,3,3]));
