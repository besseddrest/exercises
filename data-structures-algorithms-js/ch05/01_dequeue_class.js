function Dequeue() {
  this.data = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue(val, pos) {
  if (pos && pos == 'front') {
    this.data.unshift(val);
  } else {
    this.data.push(val);
  }
}

function dequeue(pos) {
  return (pos && pos == 'back') ? this.data.pop() : this.data.shift();
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
