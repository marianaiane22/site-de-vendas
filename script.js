JavaScript

// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão pelo ID
    const botao = document.getElementById('meuBotao');

    // Seleciona o parágrafo da mensagem
    const mensagem = document.getElementById('mensagem');

    // Adiciona um "ouvinte de evento" (event listener) ao botão
    botao.addEventListener('click', () => {
        // Altera o texto do parágrafo quando o botão é clicado
        mensagem.textContent = 'O JavaScript está funcionando! Você clicou no botão.';
        
        // Opcional: Altera o estilo do botão temporariamente
        botao.style.backgroundColor = '#ffc107'; // Amarelo
        botao.style.color = '#333';
        
        // Volta ao estilo original após 1 segundo
        setTimeout(() => {
            botao.style.backgroundColor = '#28a745'; 
            botao.style.color = 'white';
        }, 1000);
    });
});
