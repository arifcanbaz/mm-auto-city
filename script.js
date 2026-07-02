// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  const [a, b, c] = toggle.querySelectorAll('span');
  if (open) {
    a.style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
    b.style.opacity = '0';
    c.style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
  } else {
    a.style.cssText = b.style.cssText = c.style.cssText = '';
    b.style.opacity = '';
  }
});
links.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.querySelectorAll('span').forEach(s => { s.style.cssText = ''; s.style.opacity = ''; });
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), e.target.dataset.delay || 0);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.num-item, .cat-card, .svc-row, .reach-btn, .team-member, .addr-line'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.dataset.delay = (i % 4) * 80;
  io.observe(el);
});
