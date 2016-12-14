/*
 * accum("abcd");    // "A-Bb-Ccc-Dddd"
 * accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt");    // "C-Ww-Aaa-Tttt"
 */

function accum(s) {
  // create a blank string
  var string = '';

  for (var i = 0; i < s.length; i++) {
    // uppercase current letter and repeat the letter based on index i times, concatenate
    string += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);

    // add a dash, but not on the last letter
    if (i != s.length - 1) {
      string += '-';
    }
  }

  return string;
 }

/*
 * Question
 * is it better to create an array then .join('-')? Why?
 *
 * StackOverflow
 * http://stackoverflow.com/questions/4051385/javascript-access-string-chars-as-array
 * "Accessing characters as numeric properties of a string is non-standard prior
 * to ECMAScript 5 and doesn't work in all browsers (for example, it doesn't
 * work in IE 6 or 7).""
 */
