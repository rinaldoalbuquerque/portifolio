document.addEventListener("DOMContentLoaded", function () {
    const verMaisBtns = document.querySelectorAll('.ver-mais');
    const modais = document.querySelectorAll('.modal');
    const fecharModalBtns = document.querySelectorAll('.fechar');

    // Função para abrir a janela modal
    verMaisBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    // Fechar a janela modal
    fecharModalBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Fechar o modal se o usuário clicar fora da janela
    window.addEventListener('click', function (e) {
        modais.forEach((modal) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
