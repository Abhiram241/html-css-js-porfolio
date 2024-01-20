function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Use 'smooth' to enable smooth scrolling
  });
}
function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}
