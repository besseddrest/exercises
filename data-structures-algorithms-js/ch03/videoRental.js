function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

var titles = [
  "1. The Shawshank Redemption",
  "2. The Godfather",
  "3. The Godfather: Part II",
  "4. Pulp Fiction",
  "5. The Good, the Bad and the Ugly",
  "6. 12 Angry Men",
  "7. Schindler's List",
  "8. The Dark Knight",
  "9. The Lord of the Rings: The Return of the King",
  "10. Fight Club",
  "11. Star Wars: Episode V - The Empire Strikes Back",
  "12. One Flew Over The Cuckoos Nest",
  "13. The Lord of the Rings:The Fellowship of the Ring",
  "14. Inception",
  "15. Goodfellas",
  "16. Star Wars",
  "17. Seven Samurai",
  "18. The Matrix",
  "19. Forrest Gump",
  "20. City of God"
];

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement()['name'] + ", " + list.getElement()['movie']);
    } else if (list.getElement() instanceof Rental) {
      console.log(list.getElement()['movie']);
    } else {
      console.log(list.getElement());
    }
  }
}

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

function Rental(movie) {
  this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    var r = new Rental(movie);
    customerList.append(c);
    rentals.append(r);
    filmList.remove(movie);
  } else {
    console.log(movie + ' is not available.');
  }
}

function checkIn(name, movie, filmList, customerList) {
  if (rentals.contains(movie)) {
    rentals.remove(movie);
    customerList.remove(name, movie);
    filmList.append(movie);
  } else {
    console.log(movie + ' is not from our catalog.');
  }
}

var movieList = new List();
var customers = new List();
var rentals = new List();

for (var i = 0; i < titles.length; ++i) {
  movieList.append(titles[i]);
}

console.log('Available movies: \n');
displayList(movieList);

checkOut('Harold', '4. Pulp Fiction', movieList, customers);
checkOut('Harold', '19. Forrest Gump', movieList, customers);

console.log('Movies Rented:');
displayList(rentals);

console.log('Customer Rentals: \n');
displayList(customers);

console.log('Movies Now Available: \n');
displayList(movieList);
