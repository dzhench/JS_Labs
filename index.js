// This script listens for the scroll event on the window
let headerEl = document.getElementById("header")

window.addEventListener("scroll", function() {
    const scrollPos = window.scrollY
    if (scrollPos > 1) {
        headerEl.classList.add("fixed")
    } else {
        headerEl.classList.remove("fixed")
    }
})
