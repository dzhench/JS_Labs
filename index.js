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

const imgURLArr = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpeg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
]

// Show spinner
const spinner = document.getElementById('spinner')
spinner.style.display = 'block'

// Gallery container and modal window
const gallery = document.getElementById('gallery')
const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

// Variable to track the current image
let currentIndex = 0

// Function to open the modal with the selected image
function openModal(index) {
    currentIndex = index
    modalImg.src = imgURLArr[currentIndex]
    modal.classList.add('show')
}

// Function to close the modal
function closeModal() {
    modal.classList.remove('show')
}

// Handlers for navigation buttons
prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imgURLArr.length) % imgURLArr.length
    modalImg.src = imgURLArr[currentIndex]
})
nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % imgURLArr.length
    modalImg.src = imgURLArr[currentIndex]
})

// Close modal when clicking outside the image
modal.addEventListener('click', function (event) {
    if (event.target === modal) closeModal()
})

// Array to store image loading promises
const promiseArr = []

for (let i = 0; i < imgURLArr.length; i++) {
    const url = imgURLArr[i]
    const promise = new Promise(function (resolve, reject) {
        const img = document.createElement('img')
        img.classList.add("picture")
        img.src = url

        // Add handlers for load and error events
        img.addEventListener("load", function () {
            resolve()
        })
        img.addEventListener("error", function () {
            reject()
        })

        // Click handler to open modal
        img.addEventListener("click", function () {
            openModal(i)
        })

        // Add image to the gallery
        gallery.append(img)
    })
    promiseArr.push(promise)
}

// Wait for all images to load
Promise.all(promiseArr).then(
    function () {
        // Hide spinner and show gallery
        spinner.style.display = 'none'
        gallery.classList.add('visible')
    },
    function () {
        // If loading error occurs, hide spinner and display message
        spinner.style.display = 'none'
        alert("Error loading one or more images.")
    }
)