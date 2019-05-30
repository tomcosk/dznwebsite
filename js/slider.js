document.documentElement.className = 'js';
var slides = document.getElementById('slideshow').getElementsByTagName('div');
function slideShow(i) {
  slides[i].className = '';
  if (i == slides.length - 1) {
    slides[0].className = 'show';
    i = -1;
  }
  if (i > -1) {
    slides[i + 1].className = 'show';
  }
  setTimeout(function() {
    slideShow(++i % slides.length);
  }, 5000);
}
setTimeout(function() {
  slides[0].className = 'show';
}, 1);
setTimeout(function() {
  slideShow(0);
}, 2000);
