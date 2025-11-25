// carousel.js
// Simple autoplay carousel for testimonials
const carousel = document.getElementById('testimonialCarousel');
if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let index = 0;
  let autoplay;

  const update = () => {
    const width = cards[0].getBoundingClientRect().width + 16;
    track.style.transform = `translateX(-${index * width}px)`;
    dotsContainer.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { index = i; update(); reset(); });
    dotsContainer.appendChild(dot);
  });

  const next = () => { index = (index + 1) % cards.length; update(); };
  const prev = () => { index = (index - 1 + cards.length) % cards.length; update(); };

  nextBtn?.addEventListener('click', () => { next(); reset(); });
  prevBtn?.addEventListener('click', () => { prev(); reset(); });

  const start = () => { autoplay = setInterval(next, 5000); };
  const reset = () => { clearInterval(autoplay); start(); };

  carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
  carousel.addEventListener('mouseleave', start);

  start();
  window.addEventListener('resize', update);
}
