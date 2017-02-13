/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let sum = stash = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    // stash the value if this char is less than next char
    if (romans[char] < romans[s.charAt(i + 1)]) {
      stash = romans[char];
    } else {
      // subtract stash from current number and add to sum
      sum += (romans[char] - stash);
      stash = 0;
    }
  }

  return sum;
};
