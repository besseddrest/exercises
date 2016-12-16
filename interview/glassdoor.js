// Algorithm to check if a character is present in an array of strings and return the string
// Same: How would you find all the words from list of words for a given single character. You can preprocess the strings and memory is not an issue.
// input: array, char
// output: array of matched strings
function findStrings(arr, char) {
  var matched = [];

  // iterate over each word in array
  // see if .indexOf(char) is true
  // if true, push to matched

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(char) > -1){
      matched.push(arr[i]);
    }
  }

  console.log(matched);
  return matched;
}

var words = ['lorem', 'ipsum', 'foo', 'bar', 'hello', 'world'];
findStrings(words, 'l');

// Given 2 arrays that are already sorted, write a quick function that combines
// both arrays and returns a single sorted array.
// input is arr1, arr2
// output is arr
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2).sort(function(a,b){return a-b});
}

var first = [1,2,3,4,5];
var second = [6,7,8,9,10];
combineArrays(second,first);

// Write your own script that does a JSONP request, without using jQuery. Should
// work with multiple calls to the function and support async.
/* solution, does not support multiple calls */
var script = document.createElement('script');
script.src = '//example.com/path/to/jsonp?q=myCallback';
script.async = true;
document.getElementsbyTagName('head').appendChild(script);

function myCallback(data) {
  // do something with this data
}
/* Below is a proposed solution on Glassdoor
function jsonpCaller(URL, callback) {
  var returnScript, fName;
  // Need a random name to avoid collisions:
  fName = (new Date()).getTime() + '_' + Math.floor(Math.random()*1001);
  returnScript = document.createElement('script');
  returnScript.src = URL + (URL.indexOf("?") > -1 ? "&" : "?") + 'callback=' + fName;
  returnScript.async = true;

  window[fName] = function(data) {
    callback(data);
    window[fName] = null; // Clean up a bit
  }

  // How to handle errors? use a setTimeOut to delay and then window[fName] = null;
  // ...or (don't think this works in IE tho):
  returnScript.onerror = function() {
    window[fName] = null; // plus whatever add. error handling you want
  }
}
*/

// Given a large list of strings (that we are allowed to pre-process), we want
// to make repeated queries about how many times a particular character appears
// in all the strings.
//
// hash table?

function charCount(arr) {
  // create hash table
  var chars = {};

  // iterate through the words
  for (var i = 0; i < arr.length; i++){
    var word = arr[i];

    // iterate over each letter in current word
    for (var j = 0; j < word.length; j++) {

      // if the letter doesn't exist in the table, add it
      if (!chars[word[j]]){
        chars[word[j]] = 1;
      } else {
        // if it exists, up the count by one
        chars[word[j]]++;
      }
    }
  }

  console.log(chars);
  return chars;
}

var words = ['lorem', 'ipsum', 'foo', 'bar', 'hello', 'world'];

charCount(words);

// 1. Find the max product of 3 integers in an array.
// given an array of multiple integers [10, 3, 5, 6, 20]
// sort array, grab top 3, multiply them
function maxProduct(arr) {
  var product = 1;

  // sort the array, desc
  arr.sort(function(a,b){return b-a});

  // make a copy, of the first 3 items
  var sliced = arr.slice(0, 3);

  // iterate and multiply product by each item
  for (var i = 0; i < sliced.length; i++) {
    product *= sliced[i];
  }

  console.log(product);
  return product;
}

var numbers = [10, 3, 5, 6, 20];
maxProduct(numbers);

// List and describe every unit of measurement in CSS.``
Absolute
mm, cm, in
px - 1 device pixel
pt - 1/72 of an inch
pc - 12 pts
Relative
em - relative to the font-size
ch - relative to width of '0'
rem - relative to the root element
vw - relative to 1% of the viewport width
vh - relative to 1% of the viewport height
vmin - relative to 1% of the viewports smaller dimension
vmax - relative to 1% of the viewports larger dimension

// Q: What does 'use strict' mean in javascript?
Expression that can be used in ES5, not recognized by older browsers
will require code written in strict mode. Will throw more exceptions
will catch some common coding bloopers or unsafe actions and throw an exception
- trying to gain access to a global object
disables features that are confusing or poorly thought

// Q: How do you write chainable functions?
start with object and follow each function with a .
e.g. str.split(' ').sort().join('-');

// Estimate the number of dentists in the US; explain your assumptions, and if you
// think your answer is reasonable. Mostly an assessment in your approach to
// problem solving without having to remember various technical details.
70,000/1,000 - 1 dentist per 700 people
320 million / 700 = number of dentists
450k dentists
actual - 150k dentists

// A page uses 2 js files. Script1.js has a login function in a pop-up, script2.js
// contains event handlers for certain clicks on a page. If the user is logged in,
// the click event is processed in script2.js. If they aren't they get the pop up
// from script1.js and if/when they login in, whatever they clicked goes thru in
// script2.js. How do you do this?
script1 should check a value in cookies or the application state to determine whether the user is logged in
script2 should be listening for the click event
script2 should pass data about the destination to script1
script 1 should take the destination as an argument and redirect the user there after successful log-in

// Give a general overview of how you would increase performance of a particular
// page. The page contains several buttons in it with a bunch of associated event
// handlers with a bunch more javascript etc.
javascript minified
buttons should be created dynamically via javascript and output to the page - easier maintenance
javascript should listen for events on buttons, information about specific button could be processed by js function using bind()

// Create a sort function in JavaScript that takes user input and sorts them by moving the fields

// 2. Given a list of integer representing stock prices everyday, you can make
// 1 transaction (1 buy and 1 sell), how to make this transaction as profitable
// as possible? What is the max profit you can make?
