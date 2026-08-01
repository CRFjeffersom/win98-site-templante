


//criarJanela("Meu Computador");

const icone = document.querySelector(".icon-meucomputer");

icone.addEventListener("dblclick", () => {
    criarJanela("💻 Meu Computador",
        
        `
        <button>📁 Disco Local (C:)</button><br><br>

        <button>💾 Drive A:</button><br><br>

        <button>🌐 Rede</button>
        `
    );
});