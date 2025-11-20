// Smooth scroll and mobile nav toggle + active link highlight
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  }

  // smooth scroll for in-page anchors
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('show');
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }
  });

  // highlight active nav while scrolling
  const sections = [...document.querySelectorAll('section, header')].filter(s=>s.id);
  function onScroll() {
    const y = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= y) current = s;
    }
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current.id));
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
