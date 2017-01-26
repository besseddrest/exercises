// Implement an algorithm for secret Santa:
// You receive as input a set of people.
// You need to output a random and uniform list of pairs of these people for giving gifts to each other.
// E.g. the first person in the pair gives a gift to the second person in the pair. Make sure that everyone gets a gift and it is not allowed for a giver of a gift to receive a gift from the recipient of his gift.

// List of names:
console.time('test');
const names = ['Ruggy', 'Maud', 'Omid', 'Liza', 'Raul', 'Amy', 'Vince', 'Anne'];

// output
// [{personX: personA}, {personA: personM}]
// [{personX: personA}, {personA: personX}]

function createList(names) {
  let remaining = names.slice();
  // keep track of selected
  let chosen = [];
  let list = [];

  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    // remove self from remaining
    if (remaining.indexOf(name) > -1)
      remaining.splice(remaining.indexOf(name), 1);

    // pluck random partner out
    let partner = remaining[Math.floor(Math.random() * (remaining.length))];
    list.push({ giver: name, receiver: partner });
    remaining.splice(remaining.indexOf(partner), 1);

    // keep track of names we've selected
    chosen.push(partner);

    // put current name back in if we haven't selected yet
    if (chosen.indexOf(name) == -1)
      remaining.push(name);
  }

  return list;
}

console.log(createList(names));
console.timeEnd('test');
