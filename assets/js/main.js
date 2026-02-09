document.addEventListener('DOMContentLoaded', () => {

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Language switcher
    const langBtn = document.getElementById('langBtn');
    let isEnglish = true;

    langBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-en]');

        elements.forEach(el => {
            el.textContent = isEnglish ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        });

        // Switch page direction
        document.body.dir = isEnglish ? 'rtl' : 'ltr';

        // Switch button text
        langBtn.textContent = isEnglish ? 'English' : 'العربية';

        isEnglish = !isEnglish;
    });

    // Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    showSlide(currentSlide);

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 4000);
});
