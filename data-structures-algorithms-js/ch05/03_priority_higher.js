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

function dequeue() {
  let priority = this.data[0].code;
  let patient = 0;

  for (let i = 1; i < this.data.length; i++) {
    if (this.data[i].code > priority) {
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


function Patient(name, code) {
  this.name = name;
  this.code = code;
}

let p = new Patient('Smith', 5);
const ed = new Queue();
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);
ed.printPatients();
var seen = ed.dequeue();
console.log(`Patient being treated: ${seen[0].name}`);
console.log(`Patients waiting to be treated:`)
ed.printPatients();
var seen = ed.dequeue();
console.log(`Patient being treated: ${seen[0].name}`);
console.log(`Patients waiting to be treated:`)
ed.printPatients();
var seen = ed.dequeue();
console.log(`Patient being treated: ${seen[0].name}`);
console.log(`Patients waiting to be treated:`)
ed.printPatients();
