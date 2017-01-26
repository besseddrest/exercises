// Recursion is a programming technique in which a function calls itself

function addAllNumbers(num) {
  if (num < 0) { // if less than 0 is passed in, reject it
    return -1;
  } if (num == 1) { // for some reason we have to declare the case of 1
    return 1;
  }
  else {
    // we add all the numbers by calling the function recursively and passing in a number one less
    return num + addAllNumbers(num - 1);
  }
}
addAllNumbers(4); // 10, 4+3+2+1


// if i gave you one penny today, 2 pennies tomorrow, 4 pennies the third day, how much $ would you have after a month
function doubleMoney(days, start) {
  if (days < 0)
    return -1;

  return doubleMoney(days - 1, start * 2);
}
console.log('$:' + doubleMoney(30, 1));
