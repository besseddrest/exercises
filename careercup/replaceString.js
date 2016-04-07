/*

Find a sub string in a given string and replace it with another string?

input: string, substring, replacement
output: new string

ex:
subject: HelloWorld
substring: elloW
replacement: SUH

output: HSUHorld

if not found, return false

indexOf - find starting point
replace: 

does case matter? yes
punctuation? - no, should be part of substring
spaces? - no, should be part of substring
*/

function replaceString(string,substring,replace) {
  var str = string;
  
  if (str.indexOf(substring) >= 0) {
    return str.replace(substring, replace);
  }
  
  return false;
  
}

console.log(replaceString('HelloWorld', 'elloW', 'SUH'));
