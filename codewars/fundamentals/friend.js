// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
  // new array to store friends
  var friendArr = [];

  // iterate over array
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      // remove item if length is not 4
      friendArr.push(friends[i]);
    }
  }
  // return array
  return friendArr;
}
