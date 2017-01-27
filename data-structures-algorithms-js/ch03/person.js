function List(items) {
  this.dataStore = (items && items.length > 0) ? items : [];
  this.lastIndex = 0;
  this.insert = insert;
  this.printGender = printGender;
}

function insert(val) {
  // check value before insert
  this.dataStore[this.lastIndex++] = val;
}

function printGender(query) {
  return this.dataStore.filter((item) => item.gender == query);
}

function Person(name, gender) {
  this.name = name,
  this.gender = gender
}

const p1 = new Person('Harold', 'male');
const p2 = new Person('Ruggy', 'male');
const p3 = new Person('Maud', 'female');
const p4 = new Person('Omid', 'male');
const p5 = new Person('Liza', 'female');
const p6 = new Person('Raul', 'male');
const p7 = new Person('Amy', 'female');
const p8 = new Person('Derek', 'male');
const p9 = new Person('Jared', 'male');
const p10 = new Person('Celi', 'female');

const newPeeps = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
const people = new List(newPeeps);
