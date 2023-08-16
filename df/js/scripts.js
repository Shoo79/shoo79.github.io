/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Check scroll position and toggle button visibility
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {  // Show button after 200px
        scrollToTopBtn.style.display = "block";
        setTimeout(() => {
            scrollToTopBtn.style.opacity = "1";
        }, 50);  // Short delay to ensure the display block is rendered first
    } else {
        scrollToTopBtn.style.opacity = "0";
        setTimeout(() => {
            scrollToTopBtn.style.display = "none";
        }, 500);  // Delay must match the CSS transition duration
    }
});

// Scroll to the top logic
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

