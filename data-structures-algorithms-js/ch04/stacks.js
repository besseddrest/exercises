function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  this.dataStore[--this.top];
}

function peek() {
  this.dataStore[this.top - 1];
}


wordPos = string.indexOf(word)

stringFront = string.slice(0, wordPos)
stringBack = string.slice(wordPos + (length - 1), string.length)
