// Mobile navbar toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu when clicking a link (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Set current year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();