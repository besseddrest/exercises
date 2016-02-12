/*
19. Find Next Palindrome Number 
Given a number, find the next smallest palindrome larger than the number. For example if the number is 125, next smallest palindrome is 131. - 

125, 131
input number
output number greater than input

Options:
split the number into an arary
start beginning and compare with value at end, modify end

ex.
1,2,5
1,5
5 => 1
1,2,1
if odd length
check median
and increment
1,3,1
join and return

7,2,5,8
7,3,3,7
7,8: 7,7
2,5:

notes:
first half matters, because value is MORE
7,8 7,7
2,5 3,3 
5 is halfway, so go down on right as left goes up


3,8,3,5,6
3,6, 3,3
8,5 8,8
3 stays 3
3,8,3,8,6

38356
38386


See more at: 
http://www.ardendertat.com/2012/01/09/programming-interview-questions/#sthash.lr8hPjPu.dpuf

*/

function getNextPalindrome(num) {
  var arr = num.toString().split('');
  
  // just change first and last and forgettaboutit
  arr[arr.length - 1] = arr[0];
  
  // compare first and last
  for (var i = 1; i < arr.length; i++) {
    // 3 arr[5 - 1]
    arr[arr.length];
    console.log(arr[arr.length]);
  }
}

console.log(getNextPalindrome(38356));

