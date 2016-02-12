/* http://www.careercup.com/question?id=5742589715152896
 Find a 1st non-repeated char in the string for e.g. if string is "Salesforce is the best company to work for” returns 'l'
input: string
output: char
assuming we're not passing in punctuation
assuming we don't care about spaces
assuming we care about casing
keep a hashtable with quantities?
'1st non-repeated character':
- quantity of 1
- first char in our data structure with a qty of 1
iterate through string
tally each letter
skip spaces
is this O(n)?
*/

function firstNonRepeated(str) {
  var tally = {};
  var clean = cleanUpString(str);
  
  for (var i = 0; i < str.length; i++) {
    // e
    // e in tally
    var current = clean[i];
    if (tally.hasOwnProperty(current))
      tally[current] = tally[current] + 1;
    else {
      tally[current] = 1;
    }
  }
  
  console.log(tally);
  
  for (var key in tally) {
    if (tally[key] === 1){
      return key;
    }
  } 
}

function cleanUpString(str) {
  return str.toLowerCase();
}

console.log(firstNonRepeated('Salesforce is the best company to work for')); // l

// cleaning string is prob waste of time
// if problem searched for most occurences,
// we should probably exclude spaces
// also not likely that a punctuation will appear
// as the first nonRepeated character
