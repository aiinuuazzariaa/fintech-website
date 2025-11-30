// assets/js/script.js

// DOM elements
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const navLinks = document.querySelectorAll('a.navlink, nav a');
const sections = document.querySelectorAll('main section, header, footer');
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// ========== THEME (dark/light) ==========
// Load preference from localStorage or system
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  html.classList.add('dark');
  themeToggle.textContent = '☀️';
} else if (savedTheme === 'light') {
  html.classList.remove('dark');
  themeToggle.textContent = '🌙';
} else {
  // if no saved, match system pref
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    html.classList.add('dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// ========== MOBILE MENU TOGGLE ==========
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  // close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

// ========== SMOOTH SCROLL & ACTIVE LINK ==========
function setActiveLink() {
  let current = '';
  const offset = 140; // navbar height offset
  document.querySelectorAll('section[id], header[id]').forEach(section => {
    const top = section.offsetTop - offset;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  // remove active classes
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('text-accent', 'font-semibold');
  });

  if (current) {
    // highlight matching nav link
    const link = document.querySelector(`nav a[href="#${current}"]`);
    if (link) {
      link.classList.add('text-accent', 'font-semibold');
    }
  }
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Add smooth scroll behavior for older browsers if needed (but html has scroll-smooth)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // default anchor behavior handles it thanks to html.scroll-smooth, but prevent default for offset
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========== SIMPLE IN-PLACE ANIMATIONS (fade in on scroll) ==========
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('opacity-100', 'translate-y-0');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  // initialize hidden state via inline styles in html or css class
  appearOnScroll.observe(fader);
});

// ========== UTILITY: add fade-in classes to chosen elements ==========
// document.querySelectorAll('section').forEach(s => {
//   s.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'fade-in');
// });

// ========== OPTIONAL: small count-up animation for stat numbers ==========
function animateCount(el, target) {
  const duration = 1200;
  const start = 0;
  const range = target - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * range + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }
  window.requestAnimationFrame(step);
}

window.addEventListener('load', () => {
  // find stat elements in hero (first three cards)
  const statEls = document.querySelectorAll('header .content-width > div > div div.text-2xl');
  if (statEls.length) {
    statEls.forEach((el, idx) => {
      // targets are static: [30, 500000, 60] -> show human-readable
      if (idx === 0) animateCount(el, 30);
      if (idx === 1) animateCount(el, 500000);
      if (idx === 2) animateCount(el, 60);
    });
  }
});

// ========== Accessibility: close details with Escape ==========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('details[open]').forEach(d => d.removeAttribute('open'));
  }
});
