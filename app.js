const form = document.getElementById('waitlistForm');
const success = document.getElementById('waitlistSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btnText = form.querySelector('.btn-text');
  const btnLoading = form.querySelector('.btn-loading');
  const submitBtn = document.getElementById('submitBtn');
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  submitBtn.disabled = true;

  const data = {
    name: form.name.value,
    email: form.email.value,
    business: form.business.value,
    hours: form.hours.value,
    tasks: form.tasks.value,
    timestamp: new Date().toISOString(),
  };

  // Store locally (swap this for your API/Airtable/ConvertKit endpoint)
  const existing = JSON.parse(localStorage.getItem('auradesk_waitlist') || '[]');
  existing.push(data);
  localStorage.setItem('auradesk_waitlist', JSON.stringify(existing));

  // Simulate network delay
  await new Promise((r) => setTimeout(r, 1400));

  // Random position in the waitlist (between 200 and 400) for social proof
  const position = Math.floor(Math.random() * 200) + 200;
  document.getElementById('position').textContent = position;

  form.style.display = 'none';
  success.style.display = 'flex';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function shareTwitter() {
  const text = "Just joined the @AuraDeskHQ waitlist — Filipino VA + AI virtual assistants. Early members get 40% off. Check it out:";
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareLinkedIn() {
  const url = window.location.href;
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btns = document.querySelectorAll('.btn-share');
    btns.forEach(btn => {
      if (btn.textContent.includes('Copy')) {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = orig; }, 2000);
      }
    });
  });
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

// Scroll-triggered fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

const animatables = '.problem-card, .service-card, .step-card, .testimonial-card, .pricing-card, .faq-item, .dual-col, .ph-stat-card, .result-item, .mock-task';
document.querySelectorAll(animatables).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.45s ease ${(i % 4) * 0.08}s, transform 0.45s ease ${(i % 4) * 0.08}s`;
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Add .visible style dynamically
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});

// Waitlist counter animation
let count = 1803;
const updateCount = () => {
  const proofEl = document.querySelector('.hero-proof strong');
  if (proofEl) {
    // Slowly tick up to create urgency
    setTimeout(() => {
      count += Math.floor(Math.random() * 3);
      proofEl.textContent = count.toLocaleString() + '+';
    }, 8000);
  }
};
updateCount();
