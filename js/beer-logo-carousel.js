const carousel = document.querySelector(".carousel__container");
const slideContainer = document.querySelector(".carousel-slide__container");
const prevBtn = document.querySelector(".carousel__button-prev");
const nextBtn = document.querySelector(".carousel__button-next");

let slidesPerView = getSlidesPerView();
let slides = Array.from(slideContainer.children);
let currentIndex = slidesPerView;

function getSlidesPerView() {
  if (window.innerWidth >= 1024) {
    return 3;
  }
  if (window.innerWidth >= 768) {
    return 2;
  }
  return 1;
}

function setupCarousel() {
  slides = slides.filter((slide) => !slide.classList.contains("clone"));

  const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

  slideContainer.append(...clonesStart, ...slides, ...clonesEnd);

  updateCarousel();
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add("clone");
  return clone;
}

function updateCarousel() {
  slideContainer.style.transform = `translateX(-${
    (currentIndex * 100) / slidesPerView
  }%)`;
}

prevBtn.addEventListener("click", () => {
  if (--currentIndex < 0) {
    currentIndex = slides.length - slidesPerView * 2 - 1;
    slideContainer.style.transition = "none";
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slideContainer.style.transition = "";
      });
    });
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  slideContainer.style.transition = "";
  if (++currentIndex >= slides.length - slidesPerView) {
    currentIndex = slidesPerView;
    slideContainer.style.transition = "none";
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slideContainer.style.transition = "";
      });
    });
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  slidesPerView = getSlidesPerView();
  setupCarousel();
});
