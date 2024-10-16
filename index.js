// This script listens for the scroll event on the window
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 20) {
        header.classList.add("shrink", "shadow");
        header.style.backgroundColor = "#6699CC";
    } else {
        header.classList.remove("shrink", "shadow");
        header.style.backgroundColor = "transparent";
    }
});