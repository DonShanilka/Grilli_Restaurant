'use strict';

// preload
// loading will be end after document is loaded
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


// add event listner on multiple element
const addEventOnElement = function (element, eventType, callback) {
  for(let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


// navbar
const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function(){
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElement(navbarTogglers, "click", togglerNavbar);


// Header & Back top btn
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");


















