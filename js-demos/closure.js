// A closure is a function having access to the parent scope, even after the parent function has closed.
function fantastic(yourName) {
  var heroes = ['Reed Richards', 'Susan Storm', 'Johnny Storm', 'Ben Grimm'];

  return function(name) {
    if (heroes.indexOf(name) > -1) {
      console.log('Yes ' + yourName + ', ' + name + ' is in the Fantastic Four.');
    } else {
      console.log('No ' + yourName + ', ' + name + ' is on a different team');
    }
  }
}

var isHero = fantastic('Harold');
isHero('Wolverine'); // "No Harold, Wolverine is on a different team"
isHero('Reed Richards'); // "Yes Harold, Reed Richards is in the Fantastic Four"
