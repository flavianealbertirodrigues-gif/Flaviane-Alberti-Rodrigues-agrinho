function mostrarMensagem() {
    alert("O agronegócio sustentável é o caminho para alimentar o mundo preservando o planeta!");
}

let contador = document.getElementById("contador");
let valor = 0;

let intervalo = setInterval(() => {
    valor += 10;
    contador.textContent = valor;

    if (valor >= 5000) {
        clearInterval(intervalo);
    }
}, 10);