// find the lowest possible numbers that meet these number types:
// divisible by 7
// contains 7
// divisible by 5
// contains 5

function NumberTypes() {
  this.numbers = {};
}

// returns true if num1 contains num2
NumberTypes.prototype.containsNum = function(num1, num2) {
  return num1.toString().indexOf(num2) > -1 ? true : false;
}

// returns true if num1 is divisible by num2 w/ no remainder
NumberTypes.prototype.divByNum = function(num1, num2) {
  return num1 % num2 === 0 ? true : false;
}

// returns an array of the lowest values
NumberTypes.prototype.getNumbers = function() {
  return this.numbers;
}

// writes the key (number type) and value (lowest possible value) to this.numbers
NumberTypes.prototype.findNumbers = function() {
  let count = 1;

  while (Object.keys(this.numbers).length !== 16) {
    const numType = this.getNumType(count);

    if (!this.numbers.hasOwnProperty(numType))
      this.numbers[numType] = count;

    count++;
  }
}

// calculates the current number's type
NumberTypes.prototype.getNumType = function(num) {
  const type1 = this.containsNum(num, '5'),
        type2 = this.containsNum(num, '7'),
        type3 = this.divByNum(num, 5),
        type4 = this.divByNum(num, 7);

  return `${type1}${type2}${type3}${type4}`;
}

const numType = new NumberTypes();
numType.findNumbers();
console.log(numType.getNumbers());
