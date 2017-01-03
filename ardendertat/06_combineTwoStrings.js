/*
6. Combine Two Strings

We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the left to right ordering of the characters from each string. For example, given str1=”abc” and str2=”def”, str3=”dabecf” is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.

input str1, str2, str3
str1 'abc'
str2 'def'
str3 'dabecf'

output true/false

notes:
- we could iterate over str3
- if str3[i] is at char(0) str1 or str2
- splice from str1 or str2
- move on

// d: abc def
// a: abc ef

- See more at: http://www.ardendertat.com/2012/01/09/programming-interview-questions/#sthash.iVrFCayV.dpuf

*/

// what about string length?
// what about first char in str1 & str2 being the same?
// how can we improve this?
function isShuffled(str1, str2, str3) {

  for (var i = 0; i < str3.length; i++) {
    if (str1.charAt(0) === str3[i]) {
      // cut the first char from str1
      str1 = str1.substr(1);
      continue;
    } else if (str2.charAt(0) === str3[i]) {
      // cut the first char from str2
      str2 = str2.substr(1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isShuffled('abc','def','dabecf'));

// O(n)?

// lessons:
// splice & slice = for arrays
// - splice - (index, howmany)
// - slice - (begin, end)

// substr = give me the rest of the string from char (char)
