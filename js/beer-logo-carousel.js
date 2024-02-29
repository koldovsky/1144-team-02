const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currentSlide = 0;

let maxSlide = slides.length -1;

const nextSlide = document.querySelector('.button-next');

nextSlide.addEventListener('click', () => {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

const prevSlide = document.querySelector('.button-prev');

prevSlide.addEventListener('click', () => {
  if (currentSlide ===  0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

