const left = document.querySelector('#left-arrow');
const right = document.querySelector('#right-arrow');
const image = document.querySelectorAll('.image');
const imageWrapper = document.querySelector('.slider');
let sliderNumber = 0;


function showSlide() {
  imageWrapper.style.transform = `translateX(-${410 * sliderNumber}px)`
}

left.addEventListener('click', () => {
  sliderNumber = (sliderNumber + 1)%image.length
  showSlide()
} )

right.addEventListener('click', () => {
  sliderNumber = (sliderNumber - 1 + image.length)%image.length
  showSlide()
} )