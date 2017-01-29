// Given an expression string exp, write a program to examine whether the pairs and the orders of
//
// "{","}","(",")","[","]"
// are correct in exp.
//
// For example, the program should print true for
//
// exp = "[()]{}{[()()]()}"
// and false for
//
// exp = "[(])"

function isBalanced(str) {
  const pairs = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  let current = [];

  for ( let i = 0; i < str.length; i++ ) {
    const val = str.charAt(i);

    if (pairs.hasOwnProperty(val)) {
      // open
      current.push(val);
    } else {
      // close
      // check last item in current and see if
      if (pairs[current[current.length - 1]] == val) {
        current.pop();
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(isBalanced('[(])'));
