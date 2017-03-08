function Slideshow() {
  let data;
  let activeIndex = 0;
  const thumbs = document.querySelector('.thumbs');
  const display = document.querySelector('.display');

  // gets photos from flickr
  this.getData = () => {
    const flickrRequest = new XMLHttpRequest();

    // query params
    const method = 'method=flickr.photosets.getPhotos',
          apiKey = 'api_key=80b5e262669dbc694b3675cc0ca4e9e2',
          photosetId = 'photoset_id=72157659012153010',
          userId = 'user_id=25674596@N02',
          format = 'format=json',
          noCallback = 'nojsoncallback=?';

    flickrRequest.open('GET', `https://api.flickr.com/services/rest/?${method}&${apiKey}&${photosetId}&${userId}&${format}&${noCallback}`);

    flickrRequest.onload = () => {
      if (flickrRequest.status >= 200 && flickrRequest.status < 400)
        data = JSON.parse(flickrRequest.responseText);
        this.renderThumbs();
    }

    flickrRequest.send();
  }

  // renders thumbnails
  this.renderThumbs = () => {
    const thumbs = data.photoset.photo;

    thumbs.forEach(thumb => {
      this.renderThumb(thumb, thumbs.indexOf(thumb));
    });
  }

  // renders single thumb
  this.renderThumb = (thumb, index) => {
    const img = document.createElement('img');
    img.src = `https://farm${thumb.farm}.staticflickr.com/${thumb.server}/${thumb.id}_${thumb.secret}_s.jpg`;

    img.addEventListener('click', () => {
      activeIndex = index;
      this.renderFull(thumb);
    });

    thumbs.appendChild(img);
  }

  // renders full size image
  this.renderFull = (image) => {
    const img = document.createElement('img');

    img.src = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`;
    display.innerHTML = '';
    display.appendChild(img);
  }

  // displays image based on index arg
  this.displayImage = (index) => {
    const image = data.photoset.photo[index];

    this.renderFull(image)
  }

  // listens for arrow keys and updates active Index
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        activeIndex = activeIndex === 0 ? data.photoset.photo.length - 1 : activeIndex - 1;
        break;
      case 'ArrowRight':
        activeIndex = activeIndex === data.photoset.photo.length - 1 ? 0 : activeIndex + 1;
        break;
      default:
        break;
    }

    this.displayImage(activeIndex);
  });
}

const slides = new Slideshow();
slides.getData();
