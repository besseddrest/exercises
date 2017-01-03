/*
From Kris Chan
Given a list of numbers - if a number is divisible by 3, print "water." If it is divisible by 5, print "melon." If it is divisible by both, print "watermelon."

input: array of numbers
output: str 'water', 'melon' or 'watermelon'
print: do we just want to console.log?
lets return something useful

1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
3 - water
5 - melon
6 - water
9 - water
10 - melon
12 - water
15 - watermelon
*/

function waterMelon(arr) {

  for (var i = 0; i < arr.length; i++){
    var str = '';

    // i = 2
    // 3

    if (arr[i] % 3 === 0){
      str = 'water';
    }
    // we want to check both cases all the time
    // so two if's instead of if else
    if (arr[i] % 5 === 0) {
      str = str + 'melon';
    }

    if(str){
      console.log(str);
    }
  }
}

// ES6
function waterMelon2(arr) {
  arr.forEach(num => {
    let str = '';
    if (num % 3 == 0) {
      str = 'water';
    }
    if (num % 5 == 0) {
      str = str + 'melon';
    }

    if (str) {
      console.log(str);
    }
  });
}

console.log(waterMelon2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
