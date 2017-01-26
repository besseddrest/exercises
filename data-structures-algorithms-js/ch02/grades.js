// Create a grades object that stores a set of student grades
// Create a function to add grades
// Create a function to get an average of the students grades

function Grades() {
  this.grades = [];
  this.average = 0;
  this.add = add;
  this.getAverage = getAverage;
}

function add() {
  if (Array.isArray(arguments[0]))
    return 'Please enter a non-array list of numbers.';

  for ( let i = 0; i < arguments.length; i++ ){
    this.grades.push(arguments[i]);
  }
}

function getAverage() {
  const sum = this.grades.reduce(( all, item ) => all + item );
  const avg = sum / this.grades.length;
  this.average = avg.toFixed(2);
}

const student = new Grades();
