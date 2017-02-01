// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiples(num1, num2, num3) {
  let sum = 0;

  for (let i = 0; i <= num3; i++){
    if (i % num1 === 0 || i % num2 === 0)
      sum += i;
  }

  return sum;
}

console.log(sumOfMultiples(3, 5, 1000));
