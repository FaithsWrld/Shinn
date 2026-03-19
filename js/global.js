// ── MOBILE DETECTION ──────────────────────────────────────────────────────────
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

// ── RIPPLE EFFECT ──────────────────────────────────────────────────────────
if (!isMobile) {
  document.addEventListener('click', (e) => {
    // Don't create ripple on buttons, links, or interactive elements
    const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
    if (interactiveElements.includes(e.target.tagName) || e.target.closest('a, button, input, textarea, select')) {
      return;
    }

    // Create ripple element
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = (e.clientX - 25) + 'px';
    ripple.style.top = (e.clientY - 25) + 'px';

    // Add to body and remove after animation
    document.body.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  });
}

// ── CUSTOM CURSOR ───────────────────────────────────────────────────────────
if (!isMobile) {
  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
  });

  function animateTrail() {
    tx += (mx - tx) * 0.13;
    ty += (my - ty) * 0.13;
    if (trail) { trail.style.left = tx + 'px'; trail.style.top = ty + 'px'; }
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Scale cursor on hover
  document.querySelectorAll('a, button, .qcard, .card, .skill-category, .cert-card, .creative-card, .contact-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) { cursor.style.width = '20px'; cursor.style.height = '20px'; }
      if (trail)  { trail.style.width = '56px'; trail.style.height = '56px'; }
    });
    el.addEventListener('mouseleave', () => {
      if (cursor) { cursor.style.width = '10px'; cursor.style.height = '10px'; }
      if (trail)  { trail.style.width = '36px'; trail.style.height = '36px'; }
    });
  });
}

// ── MOBILE NAV ──────────────────────────────────────────────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── SCROLL REVEAL ───────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));
