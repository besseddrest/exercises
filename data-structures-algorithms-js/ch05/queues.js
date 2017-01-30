function Queue() {
  this.data = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
  this.printPatients = printPatients;
}

function enqueue(val) {
  this.data.push(val);
}

// function dequeue() {
//   return this.data.shift();
// }

function dequeue() {
  let priority = this.data[0].code;
  let patient = 0;

  for (let i = 1; i < this.data.length; i++) {
    if (this.data[i].code < priority) {
      priority = this.data[i].code;
      patient = i;
    }
  }
  return this.data.splice(patient, 1);
}

function front() {
  return this.data[0];
}

function back() {
  return this.data[this.data.length - 1];
}

function toString() {
  const tempArr = this.data.slice();
  return tempArr.join('\n');
}

function empty() {
  return this.data.length === 0;
}

function count() {
  return this.data.length;
}

function printPatients() {
  for (let i = 0; i < this.data.length; i++) {
    console.log(this.data[i].name, this.data[i].code);
  }
}
