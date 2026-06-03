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
    role: form.role.value,
    volume: form.volume.value,
    email_client: form.email_client.value,
    pain: form.pain.value,
    timestamp: new Date().toISOString(),
  };

  // Store locally — replace with your API/Airtable/Mailchimp endpoint
  const existing = JSON.parse(localStorage.getItem('inboxdone_waitlist') || '[]');
  existing.push(data);
  localStorage.setItem('inboxdone_waitlist', JSON.stringify(existing));

  await new Promise((r) => setTimeout(r, 1200));

  form.style.display = 'none';
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function shareWaitlist() {
  const text = "I just joined the waitlist for InboxDone — human VA + AI inbox management that actually works. Get 40% off early access:";
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'InboxDone', text, url }).catch(() => {});
  } else {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + url)}`;
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

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(
  '.feature-card, .problem-card, .step, .testimonial-card, .pricing-card, .faq-item, .split-col, .addon-card'
).forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
