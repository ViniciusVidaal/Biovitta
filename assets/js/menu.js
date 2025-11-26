// menu.js
// Mobile hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });

  if (closeMobileMenu) {
    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  }
}

// Sticky header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 80) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
