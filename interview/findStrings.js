// Algorithm to check if a character is present in an array of strings and return the string
// Same: How would you find all the words from list of words for a given single character. You can preprocess the strings and memory is not an issue.
// input: array, char
// output: array of matched strings
function findStrings(arr, char) {
  var matched = [];

  // iterate over each word in array
  // see if .indexOf(char) is true
  // if true, push to matched

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(char) > -1){
      matched.push(arr[i]);
    }
  }

  console.log(`findStrings1: ${matched}`);
  return matched;
}

var words = ['lorem', 'ipsum', 'foo', 'bar', 'hello', 'world'];
findStrings(words, 'l');

// i love ES6
const findStrings2 = words.filter(item => item.indexOf('l') > -1);
console.log(`findStrings2: ${findStrings2}`);
