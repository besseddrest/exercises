// Implement a Set class in JavaScript
//
// A Set has these properties:
//    - a collection of integers
//    - elements are not ordered (i.e. not sorted)
//    - elements are not repeated (i.e. unique)
//
// A user should be able to instantiate an instance of a Set like this:
//
//    var set = new Set()

/*
x add
x remove
x isMember
x isEmpty
x size

x union - all of the items in the sets
x intersection - only the items that exist in both sets
difference - only the items that don't exist in the opposite set
*/

class Set {
  constructor(numbers) {
    this.numbers = numbers;
  }

  // add a number to the set
  add(num) {
    if (this.numbers.indexOf(num) == -1) {
      this.numbers.push(num);
    }

  }

  // remove a number from the set
  remove(num) {
    const index = this.numbers.indexOf(num);
    if (index > -1) {
      this.numbers.splice(index, 1);
    }
  }

  isMember(num) {
    const member = (this.numbers.indexOf(num) >= 0) ? true : false;
    return member;
  }

  isEmpty() {
    return !this.numbers.length > 0;
  }

  size() {
    return this.numbers.length;
  }

  union(set) {
    const arr = this.numbers.slice();
    const newNumbers = set.numbers;
    const numbers = this.numbers;

    for ( let i = 0; i < newNumbers.length; i++ ) {
      if (arr.indexOf(newNumbers[i]) == -1) {
        arr.push(newNumbers[i]);
      }
    }

    const newSet = new Set(arr);
    return newSet;
  }

  intersection(set) {
    const arr = [];
    const numbers = this.numbers;
    const newNumbers = set.numbers;

    for ( let i = 0; i < newNumbers.length; i++ ) {
      if (numbers.indexOf(newNumbers[i]) > -1) {
        arr.push(newNumbers[i]);
      }
    }

    const newSet = new Set(arr);
    return newSet;
  }
}

var set = new Set([5,6,7,8]);

console.log(set.size());


var set2 = new Set([1,2,3,4, 5, 6]);

// set.numbers 5,6,7,8
// set2.numbers 1,2,3,4
console.log();

var set3 = set.intersection(set2);

console.log(set3.numbers);

//set.add(4).union(set2).add(3).remove(1);
