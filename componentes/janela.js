function criarJanela(titulo, conteudo) {

    const janela = document.createElement("div");

    janela.className = "window";

    // 80% da largura e altura da tela
    janela.style.width = `${window.innerWidth * 0.8}px`;
    janela.style.height = `${window.innerHeight * 0.8}px`;

    // Centraliza
    janela.style.left = `${window.innerWidth * 0.1}px`;
    janela.style.top = `${window.innerHeight * 0.1}px`;

    janela.innerHTML = `
        <div class="window-title">
            <span>${titulo}</span>

            <div class="window-buttons">
                <button class="fechar">X</button>
            </div>
        </div>

        <div class="window-content">
            ${conteudo}
        </div>
    `;

    document.getElementById("desktop").appendChild(janela);

    // Cria o botão na barra de tarefas
    criarBotaoPrograma(janela, titulo);

    const botaoFechar = janela.querySelector(".fechar");

    botaoFechar.addEventListener("click", () => {

        removerBotaoPrograma(janela);

        janela.remove();

    });

    ativarArraste(janela);

}