// red
// yellow
// green
// red yellow green
// anywhere we click, we want the next light to be active
// green --> yellow
// yellow --> red
// red --> green

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
}

changeLight();
