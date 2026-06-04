// Fade-up animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Header scroll effect
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile menu toggle
const toggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
  // Close nav on link click (non-dropdown links)
  nav.querySelectorAll('a:not(.nav-item > a)').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('active'));
  });
  // Mobile: toggle dropdowns on click
  nav.querySelectorAll('.nav-item > a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const item = a.closest('.nav-item');
        item.classList.toggle('open');
      }
    });
  });
}

// Membership type radio buttons
document.querySelectorAll('.membership-radio-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.membership-radio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Member filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
