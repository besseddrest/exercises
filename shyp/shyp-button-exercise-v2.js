// Write a function to render 10 <button> elements on the page, numbered 1 through 10,
// and alert the number of the chosen button when one is clicked.
// Do **not** use jQuery or any other libraries.

function renderButtons(num) {
  for (let i = 0; i < num; i++) {
    // create button with text
    const button = document.createElement('button');
    const text = document.createTextNode(`Button ${i + 1}`);
    button.appendChild(text);
    button.value = i + 1;

    // listen for click, alert value
    button.addEventListener('click', function(){ alert(this.value)});

    // append this to the body element
    document.body.appendChild(button);
  }
}
