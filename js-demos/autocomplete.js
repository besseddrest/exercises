// given endpoint build autocomplete
function getData() {
  // AJAX Request
  let myResponse = '';
  const myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json');
  myRequest.onload = function() {
    if (myRequest.status >= 200 && myRequest.status < 400) {
      myResponse = JSON.parse(myRequest.responseText);
      data = myResponse;
      console.log('data loaded');
    } else {
      // response from server is fail
    }
  }
  myRequest.onerror = function() {
    // something else failed
  }
  myRequest.send();
}

function filterResults(data, val) {
  // filter items that contain user input
  const matched = data.filter(item => item.toLowerCase().indexOf(val.toLowerCase()) === 0);
  // clear the results everytime the user input changes
  const results = document.querySelector('.results');
  results.innerHTML = '';
  // create li elements for each matched item
  matched.forEach(city => createListItems(city, val));
}

function createListItems(city, val) {
  const listItem = document.createElement('li');
  const results = document.querySelector('.results');
  const input = document.querySelector('input[type="text"]');
  const front = city.slice(0, val.length - 1);
  const back = city.slice(val.length - 1);
  let prev = '';

  listItem.dataset.city = city;
  listItem.innerHTML = `<strong>${front}</strong>${back}`;
  // update the input value as we mouseover the item
  listItem.addEventListener('mouseover', () => {
    prev = input.value;
    input.value = city;
  });

  // replace the input value with last user input
  listItem.addEventListener('mouseout', () => {
    input.value = prev;
  });

  // if the user clicks, set input value to that item, clear the results
  listItem.addEventListener('click', () => {
    prev = input.value;
    results.innerHTML = '';
  });
  results.appendChild(listItem);
}

function checkKey(e) {
  // keys for FF, Chrome, IE
  let arrow = e.key;

  // keys for Safari
  if (typeof arrow == 'undefined')
    arrow = e.keyIdentifier;

  switch (arrow) {
    case 'ArrowUp':
    case 'Up':
      move('up');
      break;
    case 'ArrowDown':
    case 'Down':
      move('down');
      break;
    case 'Enter':
      // set item as input value
      const input = document.querySelector('.input');
      const results = document.querySelector('.results');
      const active = document.querySelector('.item__active');
      input.value = active.dataset.city;
      results.innerHTML = '';
    default:
      break;
  }
}

function move(val) {
  const items = Array.from(document.querySelectorAll('li'));
  const active = document.querySelector('.item__active');
  const activeIndex = items.indexOf(active);
  const input = document.querySelector('.input');
  let index = 0;

  // start from active index or 0
  if (activeIndex > -1) {
    index = activeIndex;
  } else {
    items[index].classList.add('item__active');
    return;
  }

  // update classes based on key value
  if (val == 'up' && index > 0) {
    items[index].classList.remove('item__active');
    items[index - 1].classList.add('item__active');
    input.value = items[index - 1].dataset.city;
  } else if (val == 'down' && index < items.length - 1) {
    items[index].classList.remove('item__active');
    items[index + 1].classList.add('item__active');
    input.value = items[index + 1].dataset.city;
  }
}

const userInput = document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const results = document.querySelector('.results');

// Event listeners
userInput.addEventListener('keyup', () => {
  if (userInput.value.length >= 2)
    filterResults(data['United States'], userInput.value);
});

userInput.addEventListener('change', () => {
  if (userInput.value.length >= 2) {
    filterResults(data['United States'], userInput.value);
  }
});

userInput.addEventListener('keydown', (e) => {
  (e.key == 'ArrowDown' || e.keyIdentifier == 'Down') ? userInput.blur() : null;
});

window.addEventListener('keydown', (e) => {
  const items = document.querySelectorAll('li');
  if (items.length > 0) {
    checkKey(e);
  }
})

let data;
getData();
