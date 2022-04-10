let qtdCartas;
const imgsVerso = ["src='images/bobrossparrot.gif'", "src='images/explodyparrot.gif'", "src='images/fiestaparrot.gif'", "src='images/metalparrot.gif'", "src='images/revertitparrot.gif'", "src='images/tripletsparrot.gif'", "src='images/unicornparrot.gif'"];
let imgsVersoCartas;
const imgsVersoQtdCartas = [];
let cartasViradas;
let contadorJogadas;
let segundos = 0;
let idInterval;
let controleclicks = 0;
let respostaNovoJogo;

function relogio () {
    segundos ++;
    document.querySelector(".relogio").innerHTML = segundos;
}

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

    idInterval = setInterval (relogio, 1000);
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
            <div class="flip-container">
                <div class="carta">
                    <div class="face front-face" onclick="virarCarta(this)">
                        <img src="images/front.png">
                    </div>
                    <div class="face back-face">
                        <img ${imgsVersoQtdCartas[contador]}>
                    </div>
                </div>
            </div>`;
        contador ++;

        container.querySelector(".linha2-cartas").innerHTML += `
            <div class="flip-container">
                <div class="carta">
                    <div class="face front-face" onclick="virarCarta(this)">
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
    controleclicks ++;
    if (controleclicks < 3) {
        element.removeAttribute("onclick");
        contadorJogadas ++;
        element.parentNode.classList.add("carta-virada");
        cartasViradas = document.querySelectorAll(".carta-virada");
        if (cartasViradas[0].querySelector(".back-face").innerHTML == cartasViradas[1].querySelector(".back-face").innerHTML) {
            cartasViradas[0].classList.add("carta-virada-definitiva");
            cartasViradas[0].classList.remove("carta-virada");
            cartasViradas[1].classList.add("carta-virada-definitiva");
            cartasViradas[1].classList.remove("carta-virada");
            controleclicks = 0;
        } else {
            setTimeout(desvirarCartas, 1000);
        }

        setTimeout(fimJogo, 1000);

    }
}

function desvirarCartas() {
    cartasViradas[0].classList.remove("carta-virada");
    cartasViradas[1].classList.remove("carta-virada");
    cartasViradas[0].querySelector(".front-face").setAttribute("onclick", "virarCarta(this)");
    cartasViradas[1].querySelector(".front-face").setAttribute("onclick", "virarCarta(this)");
    controleclicks = 0;
}

function fimJogo () {
    const cartasViradasDefinitiva = document.querySelectorAll(".carta-virada-definitiva");

    if (cartasViradasDefinitiva.length === qtdCartas) {
        clearInterval(idInterval);
        alert(`Você ganhou em ${contadorJogadas} jogadas e em ${segundos} segundos!`);

        do {
            respostaNovoJogo = prompt("Você deseja jogar novamente?(sim/não)");
            console.log(respostaNovoJogo);
        } while (respostaNovoJogo !== "sim" && respostaNovoJogo !== "não");
        
        if (respostaNovoJogo === "sim") {
            document.location.reload();
        }
    }
}