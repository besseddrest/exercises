// Array.prototype.reduce()
// applies a function against an accumulator 'all' and each value of array 'item' to 'reduce' it to a single value

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const instances = data.reduce((all, item) => {
  if (item in all) { // if key is in obj
    all[item]++; // increment it
  } else {
    all[item] = 1; // else, start count at 1
  }

  return all; // return 'all'
}, {}); // initial value is empty object

console.log(instances);

// Sum of all numbers
const numbers = [1,2,3,4,5,6,7,8];

const sum = numbers.reduce((all, item) => {
  return all + item; // return the sum plus next item
}); // no need to set initial value

console.log(sum); // should be 36
