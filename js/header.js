"use strict";

const headerBurger = document.querySelector('.header__burger');
const headerMobileNav = document.querySelector('.header__mobile-navigation');
const header = document.querySelector(".header");

headerBurger.addEventListener('click',()=>{
    headerBurger.classList.toggle('open');
    headerMobileNav.classList.toggle('open');
    header.classList.toggle('open');
    
});