let qtdCartas;
let imgFrente = "images/front.png";


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
    console.log(qtdCartas);
    distribuirCartas();
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
                        <img src="images/bobrossparrot.gif">
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
                        <img src="images/bobrossparrot.gif">
                    </div>
                </div>
            </div>`;
        contador ++;
    }

}

function virarCarta(element){
    element.querySelector(".carta").classList.toggle("carta-virada");
}
