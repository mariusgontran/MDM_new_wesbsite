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
  document.getElementById('mdmContactForm').addEventListener('submit', e => {
    e.preventDefault();
    const value = id => document.getElementById(id).value.trim();
    const select = document.getElementById('serviceUrgency');
    const subject = 'MDM enquiry: ' + select.options[select.selectedIndex].text;
    const body = ['Name: '+value('contactName'),'Phone: '+value('contactPhone'),'Email: '+value('contactEmail'),'Location: '+value('contactSuburb'),'','Details:',value('contactMessage')].join('\n');
    window.location.href = 'mailto:marmiccomm@yahoo.com.au?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
});
