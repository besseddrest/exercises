/*
 * Write a function to render 10 <button> elements on the page, numbered 1
 * through 10, and alert the number of the chosen button when one is clicked.
 * Do **not** use jQuery or any other libraries.
 */

function createButtons(num) {
  // get the main element node
  var main = document.getElementById('main');

  for (var i = 0; i < num; i++){
    // create a button element
    var button = document.createElement('button');

    // add some text to the button
    button.innerHTML = "Button " + (i + 1);

    // bind a click listener to this button
    (function (thisButton) {
        button.addEventListener('click', function(){
          alert(thisButton.innerHTML);
        });
    }(button));

    // add this button to the main div
    main.appendChild(button);
  }
}

// create 10 buttons
createButtons(10);
