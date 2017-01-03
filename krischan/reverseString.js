/*
From Kris Chan

Given a sentence, reverse the words in the sentence. (i.e. "Hello big wide world.")

input str
output string with words in reverse, not reverse string

build array by splitting the string by ' '
build a new string by concatenation
- starting from the end and moving backwards
- we could reverse the array, but one less step?

'Try CoderPad free for seven days'
how do we eliminate space on first item

Improve
punctuation
capital to start

return new string
*/

function reverseString(str) {
  // drop the captialization at the first char
  str = str.charAt(0).toLowerCase() + str.slice(1);

  // store the punctuation at the end
  // we don't care about punctuation inbtwn
  // cause the sentence won't make sense anyway
  var punc = str.charAt(str.length - 1);
  str = str.substring(0, str.length - 1);
  var arr = str.split(' ');
  var newStr = '';

  // 5 words in str
  // str[4]
  // str[0]
  for (var i = (arr.length - 1); i >= 0; i--){
    newStr = newStr + arr[i] + ' ';
  }

  // capital to start
  // clean up string here
  newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1, newStr.length - 1) + punc;

  return newStr;
}

function reverseString2(str) {
  const punc = str.slice(str.length - 1); // pop off punctuation
  const words = str.slice(0, str.length - 1);
  const reversed = words.split(' ').reverse();
  // capitalize first letter in first word
  reversed[0] = reversed[0].charAt(0).toUpperCase() + reversed[0].slice(1);
  // lowercase last word
  reversed[reversed.length - 1] = reversed[reversed.length - 1].toLowerCase();
  // return string with punctuation
  return reversed.join(' ') + punc;
}

console.log(reverseString('Try CoderPad free for seven days!'));
console.log(`reverseString2: ${reverseString2('Try CoderPad free for seven days!')}`);

// O(n)
// what did I learn?
// - substring, slice
// - single out characters with charAt().toBlah()
