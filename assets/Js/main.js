// Simple script placeholder for form interactions or future features
console.log("Dynasty360 loaded.");

// (Optional) Form validation or auto-scroll
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for booking a session! We'll contact you shortly.");
    form.reset();
  });
});
