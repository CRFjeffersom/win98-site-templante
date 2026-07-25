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

    // Ativa o arraste da janela
    ativarArraste(janela);
}


function ativarArraste(janela) {

    const barra = janela.querySelector(".window-title");
    const desktop = document.getElementById("desktop");

    let arrastando = false;
    let offsetX;
    let offsetY;

    barra.addEventListener("mousedown", (e) => {

        arrastando = true;

        offsetX = e.clientX - janela.offsetLeft;
        offsetY = e.clientY - janela.offsetTop;

    });

    document.addEventListener("mousemove", (e) => {

        if (!arrastando) return;

        let novoLeft = e.clientX - offsetX;
        let novoTop = e.clientY - offsetY;

        const maxLeft = desktop.clientWidth - janela.offsetWidth;
        const maxTop = desktop.clientHeight - 40 - janela.offsetHeight;

        // Limita a janela ao desktop
        novoLeft = Math.max(0, Math.min(novoLeft, maxLeft));
        novoTop = Math.max(0, Math.min(novoTop, maxTop));

        janela.style.left = novoLeft + "px";
        janela.style.top = novoTop + "px";

    });

    document.addEventListener("mouseup", () => {

        arrastando = false;

    });

}