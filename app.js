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
    condition: form.condition.value,
    frustration: form.frustration.value,
    story: form.story.value,
    timing: form.timing ? form.timing.value : '',
    timestamp: new Date().toISOString(),
  };

  const existing = JSON.parse(localStorage.getItem('nourishiq_waitlist') || '[]');
  existing.push(data);
  localStorage.setItem('nourishiq_waitlist', JSON.stringify(existing));

  await new Promise((r) => setTimeout(r, 1200));

  form.style.display = 'none';
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function shareWaitlist() {
  const text = "I just joined the waitlist for NourishIQ — AI meal plans built for your specific health condition (diabetes, PCOS, IBS, and more). 3 months free at launch 👇";
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'NourishIQ', text, url }).catch(() => {});
  } else {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

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

document.querySelectorAll('.feature-card, .problem-card, .step, .testimonial-card, .pricing-card, .faq-item, .condition-pill').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
