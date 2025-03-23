document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("ativo");

        // Alterna o ícone entre "☰" e "✖"
        if (menu.classList.contains("ativo")) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Ícone de "fechar"
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Ícone de "menu"
        }
    });
});



