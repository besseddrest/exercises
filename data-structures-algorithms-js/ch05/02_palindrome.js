function isPalindrome(str) {
  // the long way
  const dq = new Dequeue();
  let reverse = '';
  for (let i = str.length - 1; i > -1; i--) {
    dq.enqueue(str[i]);
  }
  while (!dq.empty()) {
    reverse += dq.dequeue();
  }
  return reverse == str;

  // the easy way
  // let reverse = str.splice();
  // reverse.split('').reverse().join();
  // return reverse == str;
}

const dq = new Dequeue();
const str = 'racecadr';
console.log(isPalindrome(str));
