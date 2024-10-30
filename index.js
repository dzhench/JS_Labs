// index.js

// Get elements
let headerEl = document.getElementById("header");
let showMenu = document.getElementById("show-menu");
let hiddenMenu = document.getElementById("hidden-menu");
let closeButton = document.querySelector(".close");
let scrollToTopButton = document.getElementById("scroll-to-top");

// Scroll handling
window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    if (scrollPos > 1) {
        headerEl.classList.add("fixed");
        scrollToTopButton.style.display = 'block'; // Show scroll-to-top button
    } else {
        headerEl.classList.remove("fixed");
        scrollToTopButton.style.display = 'none'; // Hide scroll-to-top button
    }
});

// Handler for burger menu button
showMenu.addEventListener("click", function () {
    hiddenMenu.classList.add("show");
});

// Handler for menu close button
closeButton.addEventListener("click", function () {
    hiddenMenu.classList.remove("show");
});

// Handler for scroll-to-top button
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
