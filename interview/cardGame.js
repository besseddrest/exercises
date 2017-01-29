// algorithm
// 1. move jokerA down one,jokerA on bottom, move to 2nd position
// 2. move jokerB down two, jokerB on bottom, move to 2nd position
// 3. tripleCut: take all cards in front of first joker and exchange with group of other joker
// 4. countCut: look at card at bottom of deck
// - take that many cards from top of deck and insert in front of bottom card of deck
// -- if bottom card is either joker then treat value as 53

// string keyStream(int messageLength)

function Deck() {
  this.data = [];
  this.move = move;
  this.moveJokerA = moveJokerA;
  this.moveJokerB = moveJokerB;
  this.tripleCut = tripleCut;
  this.countCut = countCut;
  this.printCards = printCards;
  this.init = init;
}

function countCut() {
  // get bottom card
  let bottom = this.data[this.data.length - 1];
  // set count
  let count = (bottom == 'jokerA' || bottom == 'jokerB') ? 53 : bottom;

  // remove items from front
  const top = this.data.splice(0, count);

  // insert on top of bottom card
  this.data.splice(this.data.length - 1, 0, ...top);
}

function tripleCut() {
  // get joker positions
  const frontIndex = Math.min(this.data.indexOf('jokerA'), this.data.indexOf('jokerB'));
  const backIndex = Math.max(this.data.indexOf('jokerA'), this.data.indexOf('jokerB'));

  let newArr = []

  // swap book ends
  newArr = newArr.concat(this.data.slice(backIndex + 1));
  newArr = newArr.concat(this.data.slice(frontIndex, backIndex + 1));
  newArr = newArr.concat(this.data.slice(0, frontIndex));

  this.data = newArr;
}

function moveJokerA() {
  this.move('jokerA');
}

function moveJokerB() {
  this.move('jokerB');
  this.move('jokerB');
}

// moves 1 position
function move(card) {
  const index = this.data.indexOf(card);
  const joker = this.data[index];
  this.data.splice(index, 1);
  let newArr = [];

  // if we're att the end, move to the beginning
  if (index == this.data.length) {
    newArr = newArr.concat(this.data.slice(0, 1));
    newArr = newArr.concat(joker);
    newArr = newArr.concat(this.data.slice(1));
  } else {
    // move 1 spot
    newArr = newArr.concat(this.data.slice(0, index + 1));
    newArr = newArr.concat(joker);
    newArr = newArr.concat(this.data.slice(index + 1));
  }

  this.data = newArr;
}

function init() {
  for (let i = 0; i < 52; i++) {
    this.data.push(i + 1);
  }

  this.data.push('jokerA');
  this.data.push('jokerB');
}

function printCards() {
  return this.data.join(' ');
}

const game = new Deck();
game.init();
console.log(game.printCards());
