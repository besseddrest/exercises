// write a program that uses a stack (and maybe more than one) to remove the
// yellow ones without changing the order of the other candies in the dispenser

function Pez(candies) {
  this.candies = candies;
  this.removeColor = removeColor;
}

function removeColor(color) {
  // we could use .filter()
  let tempArr = [];

  for ( let i = 0; i < this.candies.length; i++ ){
    if ( this.candies[i] !== color) {
      tempArr.push(this.candies[i]);
    }
  }

  this.candies = tempArr;
}

const candies = ['red', 'yellow', 'blue', 'red', 'white', 'yellow', 'yellow', 'red', 'yellow', 'white', 'blue', 'yellow', 'white'];
const pez = new Pez(candies);
pez.removeColor('yellow');
console.log(pez.candies);
