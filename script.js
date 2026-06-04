// ===== HERO PARALLAX (LERP) =====
(function () {
  const bg      = document.getElementById('heroBg');
  const content = document.getElementById('heroContent');
  if (!bg && !content) return;

  let tx = 0, ty = 0;          // target (mouse position, normalized -1 ~ 1)
  let bgX = 0, bgY = 0;        // current bg position
  let cX  = 0, cY  = 0;        // current content position

  const EASE   = 0.07;  // lerp speed (0~1, 낮을수록 느리게 반응)
  const BG_AMT = 28;    // 배경 최대 이동 px (마우스 방향)
  const CT_AMT = -11;   // 텍스트 최대 이동 px (반대 방향 → 입체감)

  // 마우스 위치 추적 (정규화 -1 ~ 1)
  window.addEventListener('mousemove', e => {
    tx = (e.clientX / window.innerWidth  - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  (function tick() {
    // 배경: 마우스 방향으로 천천히 따라옴
    bgX = lerp(bgX, tx * BG_AMT, EASE);
    bgY = lerp(bgY, ty * BG_AMT, EASE);
    // 텍스트: 반대 방향으로 미세하게 움직임 (시차감)
    cX  = lerp(cX,  tx * CT_AMT, EASE);
    cY  = lerp(cY,  ty * CT_AMT, EASE);

    if (bg)      bg.style.transform      = `translate3d(${bgX}px,${bgY}px,0)`;
    if (content) content.style.transform = `translate3d(${cX}px,${cY}px,0)`;

    requestAnimationFrame(tick);
  })();
})();

// ===== SCROLL FADE-UP =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== MOBILE MENU =====
const toggle = document.getElementById('mobileToggle');
const nav    = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
  nav.querySelectorAll('a:not(.nav-item > a)').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('active'));
  });
  nav.querySelectorAll('.nav-item > a').forEach(a => {
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        a.closest('.nav-item').classList.toggle('open');
      }
    });
  });
}

// ===== MEMBERSHIP TYPE SELECT =====
document.querySelectorAll('.membership-radio-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.membership-radio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== MEMBER FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
