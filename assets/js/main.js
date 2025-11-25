// main.js
// Filters, lightbox, smooth scroll, ripple helper

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Gallery filters
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach((item) => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });
  lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });
  lightbox.querySelector('.close').addEventListener('click', () => { lightbox.style.display = 'none'; });
}

// Ripple effect fallback
const ripples = document.querySelectorAll('.ripple');
ripples.forEach((el) => {
  el.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple-circle');
    const ripple = this.getElementsByClassName('ripple-circle')[0];
    if (ripple) ripple.remove();
    this.appendChild(circle);
  });
});

// Progress bars animation when visible
const progresses = document.querySelectorAll('.progress span');
const progObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = '100%';
      progObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
progresses.forEach((p) => progObs.observe(p));
