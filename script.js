let currentSlide = 0;
function moveSlide(direction){
    const slides = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

let currentSlide1 = 0;
function moveSlide1(direction){
    const slides1 = document.querySelector('.carousel1');
    const totalSlides1 = document.querySelectorAll('.slide1').length;
    currentSlide1 = (currentSlide1 + direction + totalSlides1) % totalSlides1;
    slides1.style.transform = `translateX(-${currentSlide1 * 100}%)`;
}