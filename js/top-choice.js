"use strict";

const images = document.querySelectorAll(".top-choice__images-container .top-choice__image");
const modal = document.querySelector(".top-choice__modal");
const modalImg = document.querySelector(".top-choice__modalImg");
const close = document.querySelector(".top-choice__modal-close");
const prevBtn = document.querySelector(".top-choice__prev");
const nextBtn = document.querySelector(".top-choice__next");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modal.classList.add("appear");

    let imageIndex = index;
    let next = imageIndex++;
    let prev = imageIndex--;

    window.addEventListener("keyup", (e) => {
      if (next >= images.length) {
        next = 0;
      } else if (prev < 0) {
        prev = images.length - 1;
      }
      
      if (e.key === "ArrowLeft") {
        modalImg.src = images[prev].src;
        prev--;
        next = prev + 2;
      } else if (e.key === "ArrowRight") {
        modalImg.src = images[next].src;
        next++;
        prev = next - 2;
      } else if (e.key === "Escape") {
        modal.classList.remove("appear");
      }
    });
    
    prevBtn.addEventListener("click", () => {
      modalImg.src = images[prev].src;
      prev--;
      next = prev + 2;
    });
    
    nextBtn.addEventListener("click", () => {
      modalImg.src = images[next].src;
      next++;
      prev = next - 2;
    });

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
})