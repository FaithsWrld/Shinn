// ── COUNTER ANIMATION ───────────────────────────────────────────────────────
function animateCount(el, target, duration = 1200) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statNums = document.querySelectorAll('.stat-num[data-count]');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCount(el, parseInt(el.dataset.count));
      statsObserver.unobserve(el);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

statNums.forEach(el => statsObserver.observe(el));

// ── QUICK CARDS STAGGER ─────────────────────────────────────────────────────
document.querySelectorAll('.qcard').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`;

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      obs.unobserve(card);
    }
  }, { threshold: 0.1 });
  obs.observe(card);
});
