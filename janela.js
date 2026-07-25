function criarJanela(titulo, conteudo) {

    const janela = document.createElement("div");

    janela.className = "window";

        // 80% da largura e altura da janela do navegador
    janela.style.width = `${window.innerWidth * 0.8}px`;
    janela.style.height = `${window.innerHeight * 0.8}px`;

    // Centraliza a janela
    janela.style.left = `${window.innerWidth * 0.1}px`;
    janela.style.top = `${window.innerHeight * 0.1}px`;


    janela.innerHTML = `
        <div class="window-title">
            <span>${titulo}</span>

            <button class="fechar">X</button>

        </div>

        <div class="window-content">

            ${conteudo}

        </div>
    `;

    const botaoFechar = janela.querySelector(".fechar");

    botaoFechar.addEventListener("click", () => {
        janela.remove();
    });

    document.getElementById("desktop").appendChild(janela);

}