/* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  if (strs.length < 1)
    return '';

  return strs.reduce((result, item) => shortestOfTwo(result, item));
};

const shortestOfTwo = (a, b) => {
  let short = a;
  let long = b;

  if (a.length > b.length) {
    short = b;
    long = a;
  }

  while (long.indexOf(short) !== 0) {
    short = short.slice(0, -1);
  }

  return short;
};

const strs = ["a"];
console.log(longestCommonPrefix(strs));
