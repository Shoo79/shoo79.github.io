document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollToTop = document.querySelector('.scroll-to-top');

    // Hamburger-Menü Toggle
    navToggle.addEventListener('click', () => {
        const isActive = navToggle.classList.toggle('active');
        nav.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Navigation Links schließen bei Klick
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Smooth Scroll für Anker-Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            scrollToTop.classList.add('visible');
        } else {
            scrollToTop.classList.remove('visible');
        }
    });

    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll-Animation (Fade-in)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Header-Schatten bei Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });

    // Kontaktformular - AJAX Submission
    const kontaktForm = document.getElementById('kontakt-form');
    const formSuccess = document.getElementById('form-success');
    const newMessageBtn = document.getElementById('new-message');

    if (kontaktForm) {
        kontaktForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = kontaktForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Wird gesendet...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(kontaktForm);
                
                const response = await fetch('https://formcarry.com/s/ko3Jf-SXAtk', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Erfolgsmeldung anzeigen
                    kontaktForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                    kontaktForm.reset();
                } else {
                    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
                }
            } catch (error) {
                alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // "Neue Nachricht" Button
    if (newMessageBtn && kontaktForm && formSuccess) {
        newMessageBtn.addEventListener('click', () => {
            formSuccess.style.display = 'none';
            kontaktForm.style.display = 'block';
        });
    }
});
