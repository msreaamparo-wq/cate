(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  // Replace the placeholder with Chelsea's real email address before publishing.
  const emailLink = document.querySelector('#contact-email');
  if (emailLink) {
    emailLink.addEventListener('click', event => {
      if (emailLink.getAttribute('href').includes('replace-with-chelsea-email')) {
        event.preventDefault();
        alert('Please add Chelsea’s real email address in index.html before publishing.');
      }
    });
  }
})();
