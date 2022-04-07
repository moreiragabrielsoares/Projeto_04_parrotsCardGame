let qtdCartas;
const imgsVerso = ["src='images/bobrossparrot.gif'", "src='images/explodyparrot.gif'", "src='images/fiestaparrot.gif'", "src='images/metalparrot.gif'", "src='images/revertitparrot.gif'", "src='images/tripletsparrot.gif'", "src='images/unicornparrot.gif'"];
let imgsVersoCartas;
const imgsVersoQtdCartas = [];
let cartasViradas;
let contadorJogadas;


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
    contadorJogadas = 0;
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
    contadorJogadas ++;
    element.querySelector(".carta").classList.add("carta-virada");
    cartasViradas = document.querySelectorAll(".carta-virada");
    console.log(cartasViradas[0].querySelector(".back-face").innerHTML);
    console.log(cartasViradas[1].querySelector(".back-face").innerHTML);
    if (cartasViradas[0].querySelector(".back-face").innerHTML == cartasViradas[1].querySelector(".back-face").innerHTML) {
        cartasViradas[0].classList.add("carta-virada-definitiva");
        cartasViradas[0].classList.remove("carta-virada");
        cartasViradas[1].classList.add("carta-virada-definitiva");
        cartasViradas[1].classList.remove("carta-virada");
        console.log("Feito");
    } else {
        setTimeout(desvirarCartas, 1000);
    }

    setTimeout(fimJogo, 1000);
}

function desvirarCartas() {
    cartasViradas[0].classList.remove("carta-virada");
    cartasViradas[1].classList.remove("carta-virada");
}

function fimJogo () {
    const cartasViradasDefinitiva = document.querySelectorAll(".carta-virada-definitiva");

    if (cartasViradasDefinitiva.length === qtdCartas) {
        alert(`Você ganhou em ${contadorJogadas} jogadas!`);
        let respostaNovoJogo = prompt("Você deseja jogar novamente?(sim/não)");
        if (respostaNovoJogo === "sim") {
            document.location.reload();
        }
    }
}