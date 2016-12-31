// red
// yellow
// green
// red yellow green
// anywhere we click, we want the next light to be active
// green --> yellow
// yellow --> red
// red --> green
const stoplight = document.querySelector('.stoplight');
const colors = ['red', 'yellow', 'green'];

// listen for clicks on the stoplight
stoplight.addEventListener('click', function() {
	const active = document.querySelector(`.active`);
	// get color of element that is currently active
	const currentColor = active.dataset.color;
	// get the index of the next color
	let nextIndex = colors.indexOf(currentColor) + 1;
	if (currentColor == 'green') {
			nextIndex = 0;
	}
	// remove active class from active light
	active.classList.remove('active');
	// add active class to the next light based on colors array
	document.querySelector(`[data-color=${colors[nextIndex]}]`).classList.add('active');
});




// written with jQuery
// let's start with green
function changeLight() {
	var stoplight = document.getElementById('stoplight');
  var colors = ['green', 'yellow', 'red'];

  // see if we can get the next child element and change it's background
  stoplight.addEventListener('click', function() {
  	  // 2. look up the color of the active element
      var currentColor = $('li.active').attr('id');

      $('li.active').removeClass('active');

      var nextIndex, currentIndex;

      // the indexOf the next color
      if (currentColor == 'red') {
        nextIndex = 0;
      } else {
        currentIndex = colors.indexOf(currentColor);
        nextIndex = currentIndex + 1;
      }

      nextColor = colors[nextIndex];

      $('#' + nextColor).addClass('active');
  });
	changeLight();
}
