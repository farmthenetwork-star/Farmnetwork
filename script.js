// Hero Slider (Autoplay)
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");

  // Auto slide every 5 seconds
  setTimeout(showSlides, 5000);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}
