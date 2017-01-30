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
