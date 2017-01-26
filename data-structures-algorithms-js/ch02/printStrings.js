// Store a list of strings in an array and display the contents both fwd and backward

const strings = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];

function printForward(arr) {
  arr.forEach((item) => console.log(item));
}

function printReverse(arr) {
  let reversed = arr.slice().reverse();
  reversed.forEach((item) => console.log(item));
}

printForward(strings);
printReverse(strings);
