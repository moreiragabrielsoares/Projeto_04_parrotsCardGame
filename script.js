let qtdCartas;
const imgsVerso = ["src='images/bobrossparrot.gif'", "src='images/explodyparrot.gif'", "src='images/fiestaparrot.gif'", "src='images/metalparrot.gif'", "src='images/revertitparrot.gif'", "src='images/tripletsparrot.gif'", "src='images/unicornparrot.gif'"];
let imgsVersoCartas;
const imgsVersoQtdCartas = [];


function perguntarQtdCartas() {

    let verificador = 0;

    while (verificador === 0) {
        qtdCartas = prompt("Com quantas cartas você quer jogar? (Número par entre 4 e 14)");
        qtdCartas = Number(qtdCartas);
        if (qtdCartas >= 4 && qtdCartas <= 14 && ((qtdCartas % 2) == 0)) {
        verificador = 1;
        } else {
        alert("Número inválido!");
        }
    }

    criarArrayImgs();
    distribuirCartas();
}

function comparador() { 
	return Math.random() - 0.5; 
}

function criarArrayImgs() {
    imgsVersoCartas = imgsVerso.slice(0, qtdCartas/2);
    let contador = 0;
    while (contador < qtdCartas/2) {
        imgsVersoQtdCartas.push(imgsVersoCartas[contador]);
        imgsVersoQtdCartas.push(imgsVersoCartas[contador]);
        contador ++;
    }
    imgsVersoQtdCartas.sort(comparador);
}

function distribuirCartas() {
    const container = document.querySelector(".container-jogo");
    let contador = 0;

    while (contador < qtdCartas) {
        container.querySelector(".linha1-cartas").innerHTML += `
            <div class="flip-container" onclick="virarCarta(this)">
                <div class="carta">
                    <div class="face front-face">
                        <img src="images/front.png">
                    </div>
                    <div class="face back-face">
                        <img ${imgsVersoQtdCartas[contador]}>
                    </div>
                </div>
            </div>`;
        contador ++;

        container.querySelector(".linha2-cartas").innerHTML += `
            <div class="flip-container" onclick="virarCarta(this)">
                <div class="carta">
                    <div class="face front-face">
                        <img src="images/front.png">
                    </div>
                    <div class="face back-face">
                        <img ${imgsVersoQtdCartas[contador]}>
                    </div>
                </div>
            </div>`;
        contador ++;
    }

}

function virarCarta(element){
    element.querySelector(".carta").classList.toggle("carta-virada");
}
