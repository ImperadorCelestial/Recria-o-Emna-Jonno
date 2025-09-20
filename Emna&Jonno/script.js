let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scroll pra baixo → esconde o header
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scroll pra cima → mostra o header
    navbar.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});