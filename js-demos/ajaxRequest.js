const myRequest = new XMLHttpRequest();
let myResponse = '';
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
myRequest.onload = function() {
  if (myRequest.status >= 200 && myRequest.status < 400) {
    myResponse = JSON.parse(myRequest.responseText);
  } else {
    // file not found, URL was wrong (CORS issue)
    console.log('error returned');
  }
}

myRequest.onerror = function() {
  // file not found, file name was wrong
  console.log('there was an error');
}

myRequest.send();

const btn = document.querySelector('.button');

btn.addEventListener('click', function() {
  const body = document.querySelector('body');
  const myDiv = document.createElement('div');
  const text = document.createTextNode(myResponse[0].name);

  myDiv.appendChild(text);
  body.appendChild(myDiv);
});
