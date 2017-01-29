/**

The Fibonacci sequence is a sequence of integers in which every number after the first two is the sum of the two preceding ones:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, ...

*/

// Write an algorith that calculates an arbitary number of values in the fibonacci sequence,
// returned in an array
function fib(n) {
  const fibo = [];

  for (let i = 0; i < n; i++) {
  	if (i < 2) {
    	fibo.push(i);
    } else {
    	fibo.push(fibo[i-2] + fibo[i-1]);
    }
  }
	return fibo;
}

console.log(fib(5));

// Write a function that returns an array of fibonacci numbers that are multiples of 2
// (e.g. 0, 2, 8, 34, ...) where param `n` is the number of fibonacci integers to check
// for membership in the results array
function fibMultiplesTwo(n) {
	const allFib = fib(n);

  const filtered = allFib.filter(num => num % 2 === 0);

	return filtered;
}

console.log(fibMultiplesTwo(10));
