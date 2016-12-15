// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words
// reversed (Just like the name of this Kata). Strings passed in will consist
// of only letters and spaces. Spaces will be included only when more
// than one word is present.

function spinWords(str){
  // add each word to an array
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    // if the word has 5 or more letters
    if (arr[i].length >= 5) {
      var word = arr[i];
      // split that word into a new array, reverse it, and put it back together
      arr[i] = word.split('').reverse().join('');
    }
  }
  // return new string
  return arr.join(' ');
}
