
function perguntarQtdCartas() {

    let verificador = 0;

    while (verificador === 0) {
        let qtdCartas = prompt("Com quantas cartas você quer jogar? (Número par entre 4 e 14)");
        if (qtdCartas >= 4 && qtdCartas <= 14 && ((qtdCartas % 2) == 0)) {
        verificador = 1;
        } else {
        alert("Número inválido!");
        }
    }
}

