function getBlock() {
  let num1, num2, topDots, bottomDots;

  // generate random number between and including 0 and 6
  num1 = Math.floor(Math.random() * 7);
  num2 = Math.floor(Math.random() * 7);

  // get the layout for each random number
  topDots = getLayout(num1);
  bottomDots = getLayout(num2);

  // render the dot matrix to HTML
  renderDots(topDots, 'block--top');
  renderDots(bottomDots, 'block--bottom');
}

function getLayout(val) {
  switch (val) {
    case 0:
      return [];
    case 1:
      return [
        ['', '', ''],
        ['', '&bull;', ''],
        ['', '', '']
      ];
    case 2:
      return [
        ['', '', '&bull;'],
        ['', '', ''],
        ['&bull;', '', '']
      ];
    case 3:
      return [
        ['', '', '&bull;'],
        ['', '&bull;', ''],
        ['&bull;', '', '']
      ];
    case 4:
      return [
        ['&bull;', '', '&bull;'],
        ['', '', ''],
        ['&bull;', '', '&bull;']
      ];
    case 5:
      return [
        ['&bull;', '', '&bull;'],
        ['', '&bull;', ''],
        ['&bull;', '', '&bull;']
      ];
    case 6:
      return [
        ['&bull;', '', '&bull;'],
        ['&bull;', '', '&bull;'],
        ['&bull;', '', '&bull;']
      ];
  }
}

function renderDots(matrix, block) {
  let table = document.querySelector(`.${block}`);
  table.innerHTML = '';

  for (let x = 0; x < matrix.length; x++) {
    const row = document.createElement('tr');
    for (let y = 0; y < matrix[x].length; y++) {
      const cell = document.createElement('td');
      if (matrix[x][y] !== '') {
        cell.innerHTML = matrix[x][y];
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

// click handler for button
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  getBlock();
});
