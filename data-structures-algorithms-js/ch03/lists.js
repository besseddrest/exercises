function List() {
  this.lastIndex = 0;
  this.dataStore = [];
  this.insert = insert;
  this.checkValue = checkValue;
}

function insert(val) {
  // check value before insert
  if ( this.checkValue(val) ) {
    this.dataStore[this.lastIndex++] = val;
  } else {
    console.log('Value must be smaller than all items in the collection');
  }
}

function checkValue(val) {
  const len = this.dataStore.length;

  if ( len === 0 )
    return true;

  for ( let i = 0; i < len; i++ ) {
    if ( val >= this.dataStore[i] ) {
      return false;
    }
  }
  return true;
}
