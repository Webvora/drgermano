let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add('bounce');
    setTimeout(() => navbar.classList.remove('bounce'), 500);
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});





//fechar menu mobile
// Fecha o menu automaticamente no mobile após clicar em um link
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const navCollapse = document.getElementById('navContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const isVisible = window.getComputedStyle(navCollapse).display === 'block';
      if (isVisible) {
        const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
});





//script para o botão de enviar do form

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const spinner = document.getElementById("spinner");

    form.addEventListener("submit", function () {
      submitBtn.disabled = true;
      spinner.classList.remove("d-none");
    });
  });
