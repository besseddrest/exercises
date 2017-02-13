/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString();
  let end = x.length - 1;

  for (let i = 0; i < (end + 1) / 2; i++) {
    if (x[i] !== x[end - i])
      return false;
  }

  return true;
};

const num = 0;
console.log(isPalindrome(num));
