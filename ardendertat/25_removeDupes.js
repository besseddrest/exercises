/*
25. Remove Duplicate Characters in String 

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be ‘tre avsl’.

See more at: http://www.ardendertat.com/2012/01/09/programming-interview-questions/#sthash.11KEyxFv.dpuf

input string: ‘tree traversal’
output string: ‘tre avsl’

assume:
preserve spaces

hashtable?

iterate through letters.
write to new string
each char, check if in string
*/

function removeDupes(str) {
  var newStr = '';
  
  // iterate through letters
  for (var i = 0; i < str.length; i++) {
    
    // if str[i] is not in string
    if (newStr.indexOf(str[i]) === -1) {
      newStr = newStr + str[i];
    } 
  }
        
  return newStr;
}

console.log(removeDupes('tree traversal'));
