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

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const image = card.dataset.image;
    const tools = card.dataset.tools.split(',');
    const link = card.dataset.link;

    // Preencher modal
    modal.querySelector("h2").textContent = title;
    modal.querySelector("p").textContent = description;
    modal.querySelector("img").src = image;

    // Ferramentas usadas
    const toolsContainer = modal.querySelector(".tools");
    toolsContainer.innerHTML = "";
    tools.forEach(tool => {
      const span = document.createElement("span");
      span.className = "tool-icon";
      span.textContent = tool;
      toolsContainer.appendChild(span);
    });

    // Link para o projeto
    modal.querySelector(".view-project-button").href = link;

    // Mostrar modal
    modal.style.display = "block";
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});


const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const phone = form.querySelector("#phone").value.trim();
  const message = form.querySelector("#message").value.trim();

  if (name.length < 3) {
    showAlert("Erro", "Por favor, insira um nome válido (mínimo 3 letras).", "error");
    return;
  }

  if (!validateEmail(email)) {
    showAlert("Erro", "Por favor, insira um e-mail válido.", "error");
    return;
  }

  if (!/^\d{10,}$/.test(phone)) {
    showAlert("Erro", "Digite um número válido com DDD (mínimo 10 dígitos).", "error");
    return;
  }

  if (message.length < 10) {
    showAlert("Erro", "A mensagem precisa ter pelo menos 10 caracteres.", "error");
    return;
  }

  // Enviar o formulário usando o EmailJS
  emailjs.sendForm('service_id', 'template_id', form)
    .then(function(response) {
      showAlert("Enviado!", "Mensagem enviada com sucesso. Entraremos em contato!", "success");
      form.reset();
      window.location.href = "/pagina-de-agradecimento"; // Redirecionamento após o envio
    }, function(error) {
      showAlert("Erro", "Houve um problema ao enviar a mensagem. Tente novamente mais tarde.", "error");
    });
});

// Validação de e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Função para exibir alerta estilizado
function showAlert(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#007bff"
  });
}
