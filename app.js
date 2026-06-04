const form = document.getElementById('waitlistForm');
const success = document.getElementById('waitlistSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btnText = form.querySelector('.btn-text');
  const btnLoading = form.querySelector('.btn-loading');
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';

  const data = {
    name: form.name.value,
    email: form.email.value,
    business: form.business.value,
    locations: form.locations.value,
    frustration: form.rank.value,
    timestamp: new Date().toISOString(),
    source: document.referrer || 'direct',
  };

  const existing = JSON.parse(localStorage.getItem('locallift_waitlist') || '[]');
  existing.push(data);
  localStorage.setItem('locallift_waitlist', JSON.stringify(existing));

  await new Promise((r) => setTimeout(r, 1000));

  form.style.display = 'none';
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function shareWaitlist() {
  const text = 'I just joined the waitlist for LocalLift — AI that automatically optimizes your Google Business Profile and gets you ranking higher on Google Maps. Early access is 50% off 👇';
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'LocalLift — Rank Higher on Google Maps', text, url }).catch(() => {});
  } else {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

const animTargets = [
  '.feature-card',
  '.problem-card',
  '.step',
  '.testimonial-card',
  '.pricing-card',
  '.faq-item',
  '.compare-card',
  '.stat',
];

document.querySelectorAll(animTargets.join(', ')).forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});

// Live waitlist counter (simulated growth)
const countEl = document.querySelector('.hero-proof strong');
const finalCTAEl = document.querySelector('.section-final-cta p');
if (countEl) {
  const base = 3100;
  const stored = parseInt(localStorage.getItem('ll_count') || base, 10);
  const bump = stored < base + 50 ? stored + Math.floor(Math.random() * 3) : stored;
  localStorage.setItem('ll_count', bump);
  countEl.textContent = bump.toLocaleString() + '+';
  if (finalCTAEl) {
    finalCTAEl.textContent = `${bump.toLocaleString()}+ local business owners have already joined the waitlist. Early access closes once we hit capacity for our first cohort.`;
  }
}
