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
  duration: 2000,
  interval: 200,
  reset: false
});

// === ScrollReveal Configurações ===
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 4000,
  delay: 300,
  reset: true // Muda para true se quiser que a animação aconteça toda vez que rolar
});

// Revelando as seções principais

sr.reveal('.sobre', { delay: 200 });
sr.reveal('.projetos', { delay: 300 });
sr.reveal('.contato', { delay: 400 });
sr.reveal('footer', { delay: 500 });

// Revelando cards ou itens internos
sr.reveal('.projeto-card', { interval: 150 });
sr.reveal('.formulario-contato input, .formulario-contato textarea', { interval: 100 });





