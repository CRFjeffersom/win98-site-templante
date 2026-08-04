
const iconeNavegador = document.querySelector(".icon-navegador");

iconeNavegador.addEventListener("dblclick", () => {
    criarJanela(" 🌐 Navegador",
        
        `
        <iframe
            src="https://www.bing.com/"
            width="100%"
            height="100%"
            frameborder="0">
        </iframe>
        `
    );
});