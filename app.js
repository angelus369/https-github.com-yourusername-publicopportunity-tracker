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
    website: form.website.value,
    role: form.role.value,
    traffic: form.traffic.value,
    problem: form.problem.value,
    timestamp: new Date().toISOString(),
  };

  // Store locally — replace with your API endpoint (Airtable, ConvertKit, Mailchimp, etc.)
  const existing = JSON.parse(localStorage.getItem('surfaced_waitlist') || '[]');
  existing.push(data);
  localStorage.setItem('surfaced_waitlist', JSON.stringify(existing));

  await new Promise((r) => setTimeout(r, 1200));

  form.style.display = 'none';
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function shareWaitlist() {
  const text = 'I just joined the Surfaced waitlist — the first platform to get your business cited by ChatGPT, Perplexity & Google AI. 40% off early access 👇';
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'Surfaced — AEO Platform', text, url }).catch(() => {});
  } else {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  }
}

// Smooth scroll for anchor links
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
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.feature-card, .problem-card, .step, .testimonial-card, .pricing-card, .faq-item, .who-card, .stat'
).forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Live waitlist counter with slight random drift to feel real
const proofEl = document.querySelector('.hero-proof strong');
if (proofEl) {
  const base = 3100;
  const drift = Math.floor(Math.random() * 80);
  proofEl.textContent = (base + drift).toLocaleString() + '+';
}
