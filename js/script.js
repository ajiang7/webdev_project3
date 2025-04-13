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
});
