/**
 * returns an array containing the values of each Roman Numeral character
 */
function _romanNumeralDictionary() {
  // in order by `priority`, ex. values[4] is a lower priority than values[5]
  // use `priority` to determine adding or subtracting
  var values = [
    {'I' : 1},
    {'IV': 4},
    {'V' : 5},
    {'X' : 10},
    {'XL': 40},
    {'L' : 50},
    {'C' : 100},
    {'CD': 400},
    {'D' : 500},
    {'M' : 1000}
  ]

  return values;
}

/**
 * returns the numeric value of the roman numeral that is passed in
 */
function romanToNumber(roman) {
  // split roman into array
  var romanArray = roman.split('');

  // use dictionary to find the value of each character
  var dictionary = _romanNumeralDictionary();

  // what are the roman numeral rules?
  // - three in a row = 3x
  // - 2 in a row = 2x
  // - 4 in a row rare, but we'll leave out
  // - values will be in groups of 1, 2, or 3
  
  // bucket will hold the final value
  var bucket = 0;

  for (var i = 0, len = values.length; i < len; i++) {
    // check value, then check adjacent value
    // if the value is less than the one next to it, we will subtract!
    // however, I can only be subt
    if (value[i] < value[i+1]) {
      // subtract value[i] from value[i+1]
      // add to bucket
      // increment i (we've evaluated 2 roman characters)
    } else if (value[i] === value[i+1] && value[i+1] === value[i+2]){
      // 3 * value[i]
      // add to bucket
      // i = i + 2
    } else {
      // add to bucket
      // will increment normally
    }
  }

  return value;
}
