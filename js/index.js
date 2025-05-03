const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const closeMenu = document.getElementById("close-menu");
const themeToggle = document.getElementById("theme-toggle");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

document.querySelectorAll("#mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});