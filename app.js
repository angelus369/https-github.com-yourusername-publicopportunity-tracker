const form = document.getElementById('waitlistForm');
const success = document.getElementById('waitlistSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btnText = form.querySelector('.btn-text');
    const btnLoading = form.querySelector('.btn-loading');
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.style.display = 'inline';

    const data = {
      name: form.querySelector('#name').value,
      email: form.querySelector('#email').value,
      niche: form.querySelector('#niche').value,
      clients: form.querySelector('#clients').value,
      pain: form.querySelector('#pain').value,
      timestamp: new Date().toISOString(),
    };

    // Store locally (replace with Airtable/Mailchimp/Supabase endpoint)
    try {
      const existing = JSON.parse(localStorage.getItem('cc_waitlist') || '[]');
      existing.push(data);
      localStorage.setItem('cc_waitlist', JSON.stringify(existing));
    } catch (_) {}

    await new Promise((r) => setTimeout(r, 1200));

    form.style.display = 'none';
    if (success) {
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function shareWaitlist() {
  const text = "I just joined the waitlist for ContractCraft AI — AI-generated contracts for freelancers in 60 seconds. Check it out:";
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'ContractCraft AI', text, url }).catch(() => {});
  } else {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate elements on scroll
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

document.querySelectorAll('.feature-card, .problem-card, .hiw-step, .testimonial-card, .pricing-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});
