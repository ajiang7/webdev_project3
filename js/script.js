// js/script.js

window.addEventListener("DOMContentLoaded", () => {
  const title = document.title;

  if (title === "Exploring Vtubers") {
    console.log("You’re learning about Vtubers. Nice choice!");
  } else if (title === "Google Maps") {
    console.log("Exploring the map? Don’t get lost!");
  } else if (title === "Professional Resume") {
    console.log("Checking out my resume? Future employer maybe?");
  } else if (title === "Rickrolled") {
    console.log("🎶 Never gonna give you up 🎶");
  } else {
    console.log("Welcome to my site!");
  }
  
// Picture slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // Optional: auto-slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
});
