// demonstrate .bind()
var hello = {
  str: 'hello'
}

var getWord = function() {
  console.log(this.str);
}

getWord(); // undefined

var bound = getWord.bind(hello); // returns hello

bound(); // returns hello

// we use .bind() to call a function with 'this' set explicity
// it can also be used to borrow methods

// we can also use .bind() for function `currying` which allows us to
// use a function that requires multiple args to have some args preset

var greeting = function(age, gender, name) {
  var prefix = 'Ms.';
  var salutation = 'Hello';

  if (gender === 'male') {
      prefix = 'Mr.';
  }

  if (age < 35) {
    salutation = "What's up";
  }

  console.log(salutation + ', ' + prefix + ' ' + name);
}

var suhdude = greeting.bind(null, 33, 'male');
suhdude('Harold Cabalic'); // 'What's up, Mr. Harold Cabalic'
