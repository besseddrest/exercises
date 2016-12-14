// Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).
//
// E.g:
//
// n = 0 -> 2^0 -> [1]
//
// n = 1 -> 2^0, 2^1 -> [1,2]
//
// n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]

function powersOfTwo(n){
  // start with 1 in array. Will always be 0 if n = 1
  var arr = [1];

  // push powers to array
  for (var i = 0; i < n; i++) {
    arr.push(Math.pow(2, i + 1));
  }

  return arr;
}

// Question: can this be done better with recursion?
