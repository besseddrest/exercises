// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes
// of all capital letters in the string.

var capitals = function (word) {
  var arr = [];

	for (var i = 0; i < word.length; i++) {
    // check if current letter matches its upper-cased version
    if (word[i] === word[i].toUpperCase()) {
      // push that index to the new array
      arr.push(i);
    }
  }
  // it's already in order so no need to sort
  return arr;
};
