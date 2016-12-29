// Constant
// used for a value we plan to never change
// also immutable, cannot be re-assigned if we wanted
const quarter = 0.25;

/* Arrow Functions: "More expressive closure syntax."
******************************************************/
// ES5
hello = world.map(function (a) { return 'here is ' + a});
// function (a) becomes a
  // function (a,b) becomes (a,b)
// return becomes =>
  // return {}; becomes return ({})
hello = world.map(a => 'here is ' + a)
