// Implement an iterator to flatten a 2d vector.
//
// For example,
// Given 2d vector =
//
// [
//   [1,2],
//   [3],
//   [4,5,6]
// ]
// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
  this.row = 0;
  this.index = 0;
  this.array = vec2d.filter(function(arr){
    return arr.length > 0;
  });
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
  // nothing in the array
  if (!this.array.length)
    return false;

  // if this exists
  if (!isNaN(this.array[this.row][this.index])) {
    return true;
  } else if (this.array[this.row + 1]) {
    this.index = 0;
    this.row += 1;
    return true;
  }

  return false;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    return this.array[this.row][this.index++];
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 *
*/

var i = new Vector2D([[1],[]]), a = [];
while (i.hasNext()) a.push(i.next());

console.log(a);
