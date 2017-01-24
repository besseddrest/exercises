// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

// create a list of key value pairs
// if the next value does not match then return false
// 'pairs' so odd = wrong ALWAYS

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // go no further if array length is odd
    if (s.length % 2 == 1)
      return false;

    // define valid pairs
    var pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    var newArr = [];

    // check if the next value is valid pair
    for ( var i = 0; i < s.length; i++ ) {
      if ( pairs.hasOwnProperty(s[i]) ) {
        // if open
        newArr.push(s[i]);
      } else {
        // close
        // if this value is not the partner of the last item in newArray
        if ( s[i] != pairs[newArr[newArr.length - 1]] ) {
          return false;
        } else {
          // if it is, pop the last value off newArr
          newArr.pop();
        }
      }
    }
    // true only if we've popped everything from newArr
    return (newArr.length > 0) ? false : true;
};

console.log(isValid('(('));
