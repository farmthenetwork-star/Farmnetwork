// Simple JS for slider interactivity (optional if CSS auto-slide is enough)
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
    slides.style.transition = "transform 1s ease";
  }, 4000); // change every 4 seconds
});
