const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currentSlide = 0;

let maxSlide = slides.length - 1;

const nextSlide = document.querySelector(".button-next");

nextSlide.addEventListener("click", () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    if (currentSlide === maxSlide - 2) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".button-prev");

prevSlide.addEventListener("click", () => {
  if (currentSlide === -1) {
    currentSlide = maxSlide - 1;
  } else {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
        currentSlide--;
      }
    }


  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});
