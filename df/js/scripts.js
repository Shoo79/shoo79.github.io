/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Custom validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Name validation
    if (nameInput.value.trim() === '') {
        nameInput.setCustomValidity('Bitte gib deinen Namen ein.');
    } else {
        nameInput.setCustomValidity('');
    }

    // Email validation
    if (emailInput.value.trim() === '') {
        emailInput.setCustomValidity('Bitte gib eine gültige Email-Adresse ein.');
    } else {
        emailInput.setCustomValidity('');
    }

    // Phone validation
    if (phoneInput.value.trim() === '') {
        phoneInput.setCustomValidity('Bitte gib eine Telefonnummer ein.');
    } else {
        phoneInput.setCustomValidity('');
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        messageInput.setCustomValidity('Bitte gib eine Nachricht ein.');
    } else {
        messageInput.setCustomValidity('');
    }

    form.classList.add('was-validated');
});

// Open email client
form.addEventListener('click', () => {
    const email = "post@digitalfuchs.net";
    const subject = encodeURIComponent('Kontaktanfrage');
    const body = encodeURIComponent(
        `Name: ${nameInput.value}\nEmail: ${email}\nTelefon: ${phoneInput.value}\nNachricht: ${messageInput.value}`
    );

    form.action = `mailto:${email}?subject=${subject}&body=${body}`;
    form.target = '_blank';
});

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

