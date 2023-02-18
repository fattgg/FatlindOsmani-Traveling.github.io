const images = ['../images/travel.JPEG', '../images/travel2.jpg'];
let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  document.getElementById('image').src = images[index];

setInterval(changeImage, 5000);
}

