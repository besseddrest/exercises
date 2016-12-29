// A closure is an inner function that has access to its own local variables,
// outer function's variables, global variables

// provided function in map or forEach is an example of a closure, too
// ES6
numbers.map(v => { // returns new array
  if (v % 2 == 0)
    evens.push(v)
})

numbers.forEach(v => { // transforms array
  if (v % 2 == 1)
    odds.push(v)
})




// Function is useless w/o speak()
function bikeMessage(name, bike) {
  return 'Hey ' + name + ', that is a great looking ' + bike + '.';
}

// will this be used by anything other than bikeMessage();
// we might as well just call speak and pass a message to it
function speak(message) {
  console.log(message);
}

var newMessage = bikeMessage('Andrew', 'LOW//'); // create message
speak(newMessage);

// Consider a closure:
function bikeMessage(name, bike) {
  var message = 'Hey ' + name + ', that is a great looking ' + bike + '.';

  return function speak() { // nice t
    console.log(message);
  }
}

var newMessage = bikeMessage('Harold', 'Cannondale'); // create message
newMessage(); // access to inner function






// closures can privatize variables
// self invoking function you can execute code without cluttering global namespace
// could be event listeners, layout work, in this case, count = 0
var counter = (function(){
  var count = 0; // private and count only gets initialized once

  return function() {
    count++; // public
  }
})();// immediately invoked; count is now 0

// outside functions cannot modify count!
// only counter() can increment our count
counter();
counter();
counter(); // count is 3





// not necessarily returning a function
function makeTimers() {
  var main = document.getElementById('main');
  var el1 = document.createElement('div');
  var el2 = document.createElement('div');

  main.appendChild(el1);
  main.appendChild(el2);

  // creates two 'timers'
  addTimer(el1, 200);
  addTimer(el2, 350);
}

function addTimer(el, time) {
  var count = 0;
  setInterval(function(){count++;}, time);
  el.innerHTML = 'The count is ' + count;
}





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
