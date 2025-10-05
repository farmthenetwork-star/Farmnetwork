// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Hero Slider (Autoplay)
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}
