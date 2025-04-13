const toggleBtn = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
//janela modal sessao projetos
// ScrollReveal para projetos
ScrollReveal().reveal('.projeto-card', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  interval: 200,
  reset: false
});





