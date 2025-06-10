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

