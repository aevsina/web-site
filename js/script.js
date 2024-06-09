document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function prevSlide() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    showSlide(currentSlide);
});


document.getElementById('callOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value.trim();
    const userPhone = document.getElementById('userPhone').value.trim();

    if (userName === '' || userPhone === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!namePattern.test(userName)) {
        alert('Пожалуйста, введите корректное имя (только буквы и пробелы)');
        return;
    }

    const phonePattern = /^[0-9\-\+]{9,15}$/;
    if (!phonePattern.test(userPhone)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }

    alert('Сообщение успешно доставлено');

    document.getElementById('callOrderForm').reset();
});


document.addEventListener('DOMContentLoaded', function() {
    const reviewsSlider = document.querySelector('.reviews-slider');
    const reviews = document.querySelectorAll('.review');
    
    let currentIndex = 0;

    function showReview(index) {
        reviewsSlider.style.transform = `translateX(-${index * 100}%)`;
        progressBar.style.width = `${((index + 1) / reviews.length) * 100}%`;
    }

    function showNextReview() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }
});

