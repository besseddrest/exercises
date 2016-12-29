// 40.1 word-counter
// Re-creating Shiffman's counter off the top of my head, without using p5.js

// take body of copy
// if word is not in word table
// add it to wordTable and initialize count at 1
  // also add it to the words array
// else, increment the count for that word

// then
// create a new div element
// referencing the word and its count number
// sort this list by the greatest occurance to lowest in the copy passed in

var wordTable = {}; // keeps the count of each word in the copy
var words = []; // array of the words that occur in the copy

function countWords(txt){
  // create an array of words
  var tempWords = txt.split(' ');

  // iterate through tempWords
  for (var i = 0; i < tempWords.length; i++) {
    var word = tempWords[i].toLowerCase();
    // if this word is not in the hash table, add it, and add to the words array
    if (wordTable[word] === undefined) {
      wordTable[word] = 1;
      words.push(word);
    // else, increment the occurance of that word
    } else {
      wordTable[word]++;
    }
  }
}

// descending comparison function, based on occurance in wordTable
function compare(a, b) {
  var countA = wordTable[a];
  var countB = wordTable[b];
  return countB - countA;
}

// printWords separated in its own function because we can't run this on load
function printWords() {
  words.sort(compare);
  // for each word in the word array
  for (var i = 0; i < words.length; i++) {
    // create a div
    var el = document.createElement('div');
    // create a textnode
    var text = document.createTextNode(words[i] + ': ' + wordTable[words[i]]);
    var body = document.getElementsByTagName('body');

    // append new div with textnode
    el.appendChild(text);
    // append body with new element (this is why we can't run on load)
    body[0].appendChild(el);
  }
}
