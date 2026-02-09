// --------------------------
// Language toggle
// --------------------------
const langBtn = document.getElementById('langBtn');
let isArabic = false; // default: English

langBtn.addEventListener('click', () => {
    isArabic = !isArabic;

    // Update all elements with data-en and data-ar
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.textContent = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });

    // Update button text
    langBtn.textContent = isArabic ? 'English' : 'العربية';
});

// --------------------------
// Slider auto
// --------------------------
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

setInterval(nextSlide, 4000);
