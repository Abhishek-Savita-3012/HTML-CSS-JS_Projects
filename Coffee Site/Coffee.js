let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
  showSlides(slideIndex);
}

function prevSlide() {
  showSlides(slideIndex);
}

showSlides(slideIndex);
