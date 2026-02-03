document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de menu (☰) e a navegação principal
    const btnMenu = document.getElementById('btn-menu');
    const mainNav = document.getElementById('main-nav');

    if (btnMenu && mainNav) {
        btnMenu.addEventListener('click', function() {
            // Alterna a classe 'open' para mostrar/esconder o menu
            mainNav.classList.toggle('open');
            
            // Alterna o ícone do botão
            if (mainNav.classList.contains('open')) {
                btnMenu.textContent = '✖'; // Mostra um 'X' quando aberto
            } else {
                btnMenu.textContent = '☰'; // Volta para o ícone de menu
            }
        });
        
        // Garante que o menu feche ao redimensionar
        window.addEventListener('resize', function() {
            if (window.innerWidth > 750) { 
                mainNav.classList.remove('open');
                btnMenu.textContent = '☰';
            }
        });
    }
});