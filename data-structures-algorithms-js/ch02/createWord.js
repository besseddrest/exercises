function Word(letters) {
  this.letters = letters;
  this.createWord = createWord;
}

function createWord() {
  let letters = this.letters.slice();
  return letters.join('');
}

const newWord = new Word(['f','o','o','b','a','r']);

console.log(newWord.createWord());
