const pins = [
  { id: 1234, height: 200 },
  { id: 3333, height: 300 },
  { id: 3322, height: 250 },
  { id: 4455, height: 320 },
  { id: 3332, height: 150 },
  { id: 1123, height: 420 },
  { id: 5446, height: 270 },
  { id: 7465, height: 110 },
  { id: 5545, height: 400 },
  { id: 3353, height: 290 },
  { id: 7757, height: 175 },
  { id: 6656, height: 500 },
  { id: 8878, height: 340 }
]

// get elements
const columns = Array.from(document.querySelectorAll('.content'));
const btnAll = document.querySelector('.btn--load__all');
const btnOne = document.querySelector('.btn--load__single');

// functions
function getShortestColumn() {
  const short = columns.reduce((all, col) => {
    return all.offsetHeight <= col.offsetHeight ? all : col;
  });
  return short;
}

function addItem(obj, index) {
  if (index < pins.length) {
    const item = document.createElement('div');
    const pin = pins[index];

    item.classList.add('pin');
    item.innerHTML = pin.id;
    item.style.height = pin.height + 'px';
    item.style.border = '1px solid lightgreen';

    obj.appendChild(item);
    currentPin++;
  }
}

// handlers
let currentPin = 0;
btnOne.addEventListener('click', () => {
  const column = getShortestColumn();
  addItem(column, currentPin);
});

btnAll.addEventListener('click', () => {
  pins.forEach(pin => {
    const column = getShortestColumn();
    addItem(column, currentPin);
  });
});
