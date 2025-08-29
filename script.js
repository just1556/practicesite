// Tagline fade-in
document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".tagline");
  if (tagline) {
    tagline.style.opacity = 0;
    setTimeout(() => {
      tagline.style.opacity = 1;
    }, 600);
  }
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));
