console.clear();

const CARD_SUITS = [
  "Spades",
  "Hearts",
  "Diamonds",
  "Clubs"
];

const CARD_VALUES = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"
];

function Cards() {
  this.deck = [];
  this.init = init;
  this.initCards = initCards;
  this.shuffle = shuffle;
  this.dealCards = dealCards;
  this.renderCards = renderCards;
}

function init() {
  this.initCards();

  const button = document.querySelector('button');
  button.addEventListener('click', () => { this.dealCards(); });
}

function initCards() {
  for (let x = 0; x < CARD_SUITS.length; x++) {
    let char;

    switch (CARD_SUITS[x]) {
      case 'Hearts':
        char = '&hearts;';
        break;
      case 'Spades':
        char = '&spades;';
        break;
      case 'Diamonds':
        char = '&diams;';
        break;
      case 'Clubs':
        char = '&clubs;';
        break;
    }

    for (let y = 0; y < CARD_VALUES.length; y++) {
      this.deck.push([CARD_VALUES[y], char]);
    }

    this.shuffle(this.deck);
  }
}

function dealCards() {
  const hand = this.deck.splice(0, 5);

  this.renderCards(hand);
}

function renderCards(cards) {
  const board = document.querySelector('.board');
  board.innerHTML = '';

  cards.forEach(item => {
    const card = document.createElement('div');
    const suit = item[1].substr(1, item[1].length - 2);
    card.classList.add('card');
    card.classList.add(`card__${suit}`);

    const top = document.createElement('div');
    top.classList.add('card--top');
    top.innerHTML = `${item[0]}<br />${item[1]}`;

    const bottom = document.createElement('div');
    bottom.classList.add('card--bottom');
    bottom.innerHTML = `${item[0]}<br />${item[1]}`;

    card.appendChild(top);
    card.appendChild(bottom);
    board.appendChild(card);
  });
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const game = new Cards();
game.init();
