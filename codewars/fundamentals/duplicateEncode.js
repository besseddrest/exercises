// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("

function duplicateEncode(word){
    var lower = word.toLowerCase().split(''),
        string = '',
        i = 0;

    for (i = 0; i < lower.length; i++) {
      // if the first index matches the last, there is only a single letter
      if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
        string += '(';
      } else {
        string += ')';
      }
    }

    return string;
}
