// Waitlist form submission
const form = document.getElementById('waitlistForm');
const successMessage = document.getElementById('successMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      role: form.role.value,
      plan: form.plan.value,
      pain: form.pain.value,
      submittedAt: new Date().toISOString(),
    };

    // Store locally as demo (replace with real endpoint like Formspree, ConvertKit, etc.)
    const existing = JSON.parse(localStorage.getItem('inboxaxis_waitlist') || '[]');
    existing.push(data);
    localStorage.setItem('inboxaxis_waitlist', JSON.stringify(existing));

    form.style.display = 'none';
    successMessage.style.display = 'block';

    // Update spots counter
    const spotsCount = document.querySelector('.spots-count');
    const spotsNote = document.querySelector('.spots-note');
    const spotsFill = document.querySelector('.spots-fill');
    if (spotsCount) {
      spotsCount.textContent = '2';
      spotsNote.textContent = '2 of 3 spots reserved';
      spotsFill.style.width = '66%';
    }
  });
}

// FAQ accordion
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-q').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('visible');
  });

  // Open clicked if it was closed
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('visible');
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
