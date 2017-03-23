// create a lightbox
const images = [
  'http://placehold.it/350x150',
  'http://placehold.it/500x250',
  'http://placehold.it/450x350',
  'http://placehold.it/300x300'
]

// get main elements
const display = document.querySelector('.lightbox--display');
const buttons = document.querySelector('.lightbox--buttons');

const initLightbox = () => {
  images.forEach((image, i) => {
    // for each image, create a button
    const btn = document.createElement('button');
    btn.innerHTML = `Button ${i + 1}`;

    // when each button is clicked, load image into display
    btn.addEventListener('click', () => {
      const image = document.createElement('img');
      image.src = images[i];
      display.style.display = 'flex';
      display.innerHTML = '';
      display.appendChild(image);
    });

    // add this button to our buttons wrapper
    buttons.appendChild(btn);
  });
}

// hide the display if anything but the image is clicked
display.addEventListener('click', (e) => {
  if (e.target.tagName != 'IMG')
    display.style.display = 'none';
});

initLightbox();
