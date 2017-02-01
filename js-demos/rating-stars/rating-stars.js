function stars(domNode) {
  const stars = Array.from(domNode.querySelectorAll('.review--star'));

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      // on mouseover highlight this star and previous stars
      highlight(star, stars, 'add');
    })

    star.addEventListener('mouseout', () => {
      // on mouseout remove stars
      highlight(star, stars, 'remove');
    })

    star.addEventListener('click', () => {
      // on click, make this star active and previous stars
      setStars(star, stars, domNode);
    })
  });
}

function highlight(star, stars, method) {
  for (let i = 0; i <= stars.indexOf(star); i++) {
    if (method == 'add') {
      stars[i].classList.add('review--star__highlight');
    } else {
      stars[i].classList.remove('review--star__highlight');
    }
  }
}

function setStars(star, stars, domNode) {
  const input = domNode.querySelector('.review--rating');
  input.value = stars.indexOf(star) + 1;

  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove('review--star__active');
    if (i <= stars.indexOf(star))
      stars[i].classList.add('review--star__active');
  }

}

const review = document.querySelectorAll('.review');

review.forEach(item => stars(item));
