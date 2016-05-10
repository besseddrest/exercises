/* 
Reverse the words. Given a String that contains words separated by single space, reverse the words in the String. You can assume that no leading or trailing spaces are there. 

For example: "Man bites dog" => "dog bites Man”

input = string
output = string

split() string into array
reverse order of array
iterate through each item of the array and concatenate into new string
return string
^ too much work

split() string into array
iterate from end to front
concatenate new string
return new string

*/

function reverseWordsInString(str) {
  var words = str.split(' ');
  var newStr = '';
  
  for (var i = words.length - 1; i >= 0; i--) {
    newStr = newStr + ' ' + words[i];
  }
  
  return newStr;
}

function reverseWordsInString1(str) {
  var words = str.split(' ');
  words = words.reverse();

  return words.join(' ');;
}

console.log(reverseWordsInString1('Man bites dog'));

// what did i learn?
// each of these is probably fast
// but the non-iterative solution would probably be faster if there were 10,000 words
