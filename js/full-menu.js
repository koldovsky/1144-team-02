"use strict";

document.addEventListener("partialsLoaded", () => {
  import("./header.js");
});

document.addEventListener("DOMContentLoaded", function () {
  initializeInfiniteCarousel(
    ".full-menu__carousel-container--1",
    ".full-menu__list-container",
    ".full-menu__button-prev--1",
    ".full-menu__button-next--1",
    1
  );
  initializeInfiniteCarousel(
    ".full-menu__carousel-container--2",
    ".full-menu__list-container",
    ".full-menu__button-prev--2",
    ".full-menu__button-next--2",
    1
  );

  window.addEventListener("resize", function () {
    initializeInfiniteCarousel(
      ".full-menu__carousel-container--1",
      ".full-menu__list-container",
      ".full-menu__button-prev--1",
      ".full-menu__button-next--1",
      1
    );
    initializeInfiniteCarousel(
      ".full-menu__carousel-container--2",
      ".full-menu__list-container",
      ".full-menu__button-prev--2",
      ".full-menu__button-next--2",
      1
    );
  });
});

function initializeInfiniteCarousel(
  containerSelector,
  itemSelector,
  prevBtnSelector,
  nextBtnSelector,
  itemsPerPage
) {
  const container = document.querySelector(containerSelector);
  const items = container.querySelectorAll(itemSelector);
  const prevBtn = container.querySelector(prevBtnSelector);
  const nextBtn = container.querySelector(nextBtnSelector);

  let currentIndex = 0;

  function showItems() {
    items.forEach((item) => {
      item.style.display = "none";
      if (window.innerWidth >= 768) {
        itemsPerPage = 2;
      } else {
        itemsPerPage = 1;
      }
    });

    for (let i = 0; i < itemsPerPage; i++) {
      let adjustedIndex = (currentIndex + i) % items.length;
      if (items[adjustedIndex]) {
        items[adjustedIndex].style.display = "block";
      }
    }
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItems();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % items.length;
    showItems();
  });

  showItems();
}
