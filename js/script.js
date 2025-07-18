document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbar.classList.remove('active');
    });
  });

  // Language toggle logic (optional)
  const langEnBtn = document.getElementById('lang-en');
  const langHiBtn = document.getElementById('lang-hi');

  function switchLanguage(lang) {
    const allLangElems = document.querySelectorAll('.lang');
    const targetLangElems = document.querySelectorAll('.lang-' + lang);

    allLangElems.forEach(el => el.style.display = 'none');
    targetLangElems.forEach(el => el.style.display = 'inherit');

    if (langEnBtn && langHiBtn) {
      langEnBtn.classList.toggle('active', lang === 'en');
      langHiBtn.classList.toggle('active', lang === 'hi');
    }

    localStorage.setItem('preferredLang', lang);
  }

  if (langEnBtn) langEnBtn.addEventListener('click', () => switchLanguage('en'));
  if (langHiBtn) langHiBtn.addEventListener('click', () => switchLanguage('hi'));

  const savedLang = localStorage.getItem('preferredLang') || 'en';
  switchLanguage(savedLang);
});
