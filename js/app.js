document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('primaryNavMenu');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    const icon = toggle.querySelector('i');
    icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40), {passive:true});
  const form = document.getElementById('mdmContactForm');
  const status = document.getElementById('formStatus');
  const submitButton = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (submitButton.disabled || !form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('botcheck')) return;
    data.delete('redirect');
    const service = document.getElementById('serviceUrgency');
    data.set('service', service.options[service.selectedIndex].text);
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    status.hidden = false;
    status.style.color = 'var(--text-main)';
    status.textContent = 'Sending your enquiry…';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: data
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Submission rejected');
      status.textContent = 'Thank you. Your enquiry has been sent to MDM Communication.';
      form.reset();
    } catch (error) {
      status.textContent = 'We couldn’t confirm your enquiry was sent. Please try again, or call 0431 219 064. Your details are still in the form.';
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
    }
  });
});
