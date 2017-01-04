// http://careercup.com/question?id=5645782997794816
// second least common element from an integer array
// ex [5,5,4,5,4,6,6,6,1,3,3,4,4,5,4]
// answer 3
// reason: 1=1, 3=2, 4=5, 5=4, 6=3

// input: array
// output: value

// notes:
// is there a function that will count the occurrences?
// iterate through array and write to a hashtable or 2-d array
// ^ will keep track of the quantity of each
// [[1],[3,3],[4,4,4,4,4],[5,5,5,5],[6,6,6]
// ^ can't be sorted anyway

// how to check for 2nd least
// we know how to get the 'least'

function tallyNumbers(arr){
  var tally = {};

  // cycle through each
  for ( var i = 0; i < arr.length; i++){
    // write each value to hashtable or 2D array

    // exists in table, increment quantity
    var current = arr[i];
    if (current in tally) {
      var quantity = tally[current];
      tally[current] = quantity + 1;
    }
    else { // not in table, add key and quantity
      tally[current] = 1;
    }
  }

  // k, how do we find the second least
  // uhhhh
  return getSecondLeast(tally);

}

function getSecondLeast(obj) {

}

console.log(tallyNumbers([5,5,4,5,4,6,6,6,1,3,3,4,4,5,4]));
