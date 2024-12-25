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

// const imgURLArr = [
//     'images/1.jpg',
//     'images/2.jpg',
//     'images/3.jpg',
//     'images/4.jpg',
//     'images/5.jpg',
//     'images/6.jpg',
//     'images/7.jpg',
//     'images/8.jpg',
//     'images/9.jpg',
//     'images/10.jpeg',
//     'images/11.jpg',
//     'images/12.jpg',
//     'images/13.jpg',
// ]

// // Show spinner
// const spinner = document.getElementById('spinner')
// spinner.style.display = 'block'
//
// // Gallery container and modal window
// const gallery = document.getElementById('gallery')
// const modal = document.getElementById('modal')
// const modalImg = document.getElementById('modal-img')
// const prevBtn = document.getElementById('prev')
// const nextBtn = document.getElementById('next')
//
// // Variable to track the current image
// let currentIndex = 0
//
// // Function to open the modal with the selected image
// function openModal(index) {
//     currentIndex = index
//     modalImg.src = imgURLArr[currentIndex]
//     modal.classList.add('show')
// }
//
// // Function to close the modal
// function closeModal() {
//     modal.classList.remove('show')
// }
//
// // Handlers for navigation buttons
// prevBtn.addEventListener('click', function () {
//     currentIndex = (currentIndex - 1 + imgURLArr.length) % imgURLArr.length
//     modalImg.src = imgURLArr[currentIndex]
// })
// nextBtn.addEventListener('click', function () {
//     currentIndex = (currentIndex + 1) % imgURLArr.length
//     modalImg.src = imgURLArr[currentIndex]
// })
//
// // Close modal when clicking outside the image
// modal.addEventListener('click', function (event) {
//     if (event.target === modal) closeModal()
// })
//
// // Array to store image loading promises
// const promiseArr = []
//
// for (let i = 0; i < imgURLArr.length; i++) {
//     const url = imgURLArr[i]
//     const promise = new Promise(function (resolve, reject) {
//         const img = document.createElement('img')
//         img.classList.add("picture")
//         img.src = url
//
//         // Add handlers for load and error events
//         img.addEventListener("load", function () {
//             resolve()
//             img.addEventListener("click", function () {
//                 openModal(i)
//             })
//         })
//         img.addEventListener("error", function () {
//             reject()
//         })
//         // Add image to the gallery
//         gallery.append(img)
//     })
//     promiseArr.push(promise)
// }

// // Wait for all images to load
// Promise.all(promiseArr).then(
//     function () {
//         // Hide spinner and show gallery
//         spinner.style.display = 'none'
//         gallery.classList.add('visible')
//     },
//     function () {
//         // If loading error occurs, hide spinner and display message
//         spinner.style.display = 'none'
//         alert("Error loading one or more images.")
//     }
// )

// Apply hover and click animations to all buttons
document.querySelectorAll('button, .footerIconsContainer img').forEach((button) => {
    // Hover animation
    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            scale: 1.2,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            duration: 500,
            easing: 'easeOutExpo',
        });
    });

    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 500,
            easing: 'easeOutExpo',
        });
    });

    // Click animation with timeline
    button.addEventListener('click', () => {
        const timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 500,
        });

        timeline
            .add({
                targets: button,
                scale: 1.5,
                duration: 300,
            })
            .add({
                targets: button,
                rotate: '1turn',
                backgroundColor: '#3c58af',
                borderRadius: ['0%', '50%'],
                delay: 100,
            })
            .add({
                targets: button,
                scale: 1,
                rotate: '0turn',
                backgroundColor: '',
                borderRadius: ['50%', '0%'],
                duration: 300,
            });
    });
});

// Обробник делегування подій для галереї
document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.getElementById('thumbs');
    const largeImg = document.getElementById('largeImg');

    // Додаємо обробник подій на список мініатюр
    thumbs.addEventListener('click', (event) => {
        const thumbnail = event.target.closest('a');

        if (!thumbnail) return;
        showThumbnail(thumbnail.href, thumbnail.title);
        event.preventDefault();
    });

    // Функція для оновлення великого зображення
    function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
    }
});


//calculator
document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Відміна стандартної поведінки форми

    // Отримання введених даних
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    // Формули для розрахунку
    let bmr; // Основний обмін речовин
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    const calories = Math.round(bmr * activity); // Підрахунок добової калорійності

    // Виведення результату
    const resultDiv = document.getElementById('calorie-result');
    resultDiv.innerHTML = `<h3>Ваша добова норма калорій:</h3>
                           <p><strong>${calories} калорій</strong></p>`;
});

document.getElementById('appointment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Заборона стандартного надсилання форми

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorMessages = document.getElementById('errorMessages');

    // Очищення попередніх повідомлень про помилки
    errorMessages.innerHTML = "";

    // Регулярні вирази для валідації
    const nameRegex = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ'’-]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+38)?0\d{9}$/;

    let errors = [];

    // Валідація імені
    if (!nameRegex.test(firstName)) {
        errors.push("Invalid first name. Must contain only letters and be at least 3 characters long.");
    }

    // Валідація прізвища
    if (!nameRegex.test(lastName)) {
        errors.push("Invalid last name. Must contain only letters and be at least 3 characters long.");
    }

    // Валідація email
    if (!emailRegex.test(email)) {
        errors.push("Invalid email address. Please use a valid format (e.g., example@mail.com).");
    }

    // Валідація телефону
    if (!phoneRegex.test(phone)) {
        errors.push("Invalid phone number. Must be in +380XXXXXXXXX or 0XXXXXXXXX format.");
    }

    // Виведення помилок або надсилання форми
    if (errors.length > 0) {
        errors.forEach((error) => {
            const errorItem = document.createElement('p');
            errorItem.textContent = error;
            errorItem.classList.add('errorMessage'); // Применение стилей через CSS-класс
            errorMessages.appendChild(errorItem);
        });
    } else {
        alert("Form submitted successfully!");
        document.getElementById('appointment-form').reset();
    }
});

