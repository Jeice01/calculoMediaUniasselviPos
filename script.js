function calcularMedia() {
    let av1 = parseFloat(document.getElementById("av1").value);
    let av2 = parseFloat(document.getElementById("av2").value);
    let avF = parseFloat(document.getElementById("avF").value);
    let avO = parseFloat(document.getElementById("avO").value);
    let ac  = parseFloat(document.getElementById("ac").value);

    let aprovacao = 7;

    let media = ((av1 * 2) + (av2 * 2) + (avF * 2) + (avO * 4)) / 10;
    let notaTotal = media + ac;

    let resultado = document.getElementById("resultado");

    if (!isNaN(notaTotal)) { // Verifica se a média é um número válido
        resultado.innerHTML = `A sua média é: ${notaTotal.toFixed(2)}`;

        if (notaTotal >= aprovacao) {
            resultado.innerHTML += "<br>Parabéns, você passou na matéria!!!";
        } else {
            resultado.innerHTML += `<br>Faltam ${(aprovacao - notaTotal).toFixed(2)} pontos para passar!`;
        }
    } else {
        resultado.innerHTML = "Por favor, insira notas válidas para calcular a média.";
    }

    resultado.style.display = "block"; 
}


function limpar() {
    document.getElementById("av1").value = "";
    document.getElementById("av2").value = "";
    document.getElementById("avF").value = "";
    document.getElementById("avO").value = "";
    document.getElementById("ac").value = "";
    document.getElementById("resultado").innerHTML = "";
  }

