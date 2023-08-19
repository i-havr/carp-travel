(() => {
  const mobileMenu = document.querySelector(
    '.js-menu-container'
  ) as HTMLElement;
  const openMenuBtn = document.querySelector(
    '.js-open-menu'
  ) as HTMLButtonElement;
  const closeMenuBtn = document.querySelector(
    '.js-close-menu'
  ) as HTMLButtonElement;

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
  });
})();
