// currying
var add = function(a) {
  return function(b) {
    console.log(a + b);
  }
}

var test = add(2);

test(5); // 7

add(2)(3); // 5

var multiply = function(num1, num2) {
  return function(num3, num4) {
    console.log((num1 + num3) * (num2 + num4));
  }
}
