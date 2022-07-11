function reiniciar() {
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].innerText = "";
  }
  vez = "X";
  atualizaStatus(" ");
}

function atualizaStatus(texto) {
  if (texto) {
    let status = document.getElementById("status");
    status.innerText = texto;
  }

  document.getElementById("placarX").innerText = placarX;
  document.getElementById("placarO").innerText = placarO;
  document.getElementById("jogadorVez").innerHTML = vez;
}

function verificaVitoriaHorizontal() {
  if (
    botoes[0].innerText == vez &&
    botoes[1].innerText == vez &&
    botoes[2].innerText == vez
  ) {
    return true;
  } else if (
    botoes[3].innerText == vez &&
    botoes[4].innerText == vez &&
    botoes[5].innerText == vez
  ) {
    return true;
  } else if (
    botoes[6].innerText == vez &&
    botoes[7].innerText == vez &&
    botoes[8].innerText == vez
  ) {
    return true;
  }
}

function verificaVitoriaVertical() {
  if (
    botoes[0].innerText == vez &&
    botoes[3].innerText == vez &&
    botoes[6].innerText == vez
  ) {
    return true;
  } else if (
    botoes[1].innerText == vez &&
    botoes[4].innerText == vez &&
    botoes[7].innerText == vez
  ) {
    return true;
  } else if (
    botoes[2].innerText == vez &&
    botoes[5].innerText == vez &&
    botoes[8].innerText == vez
  ) {
    return true;
  }
}

function verificaVitoriaDiagonal() {
  if (
    botoes[0].innerText == vez &&
    botoes[4].innerText == vez &&
    botoes[8].innerText == vez
  ) {
    return true;
  } else if (
    botoes[2].innerText == vez &&
    botoes[4].innerText == vez &&
    botoes[6].innerText == vez
  ) {
    return true;
  }
}

function verificaDeuVelha() {
  let deuVelha = true; // inicia como true mas recebe false se ainda tiver espaços vazios
  for (let i = 0; i < botoes.length; i++) {
    if (botoes[i].innerText == "") {
      deuVelha = false;
    }
  }
  return deuVelha;
}

function verificaVitoria() {
  //todas as casas horizontais(3 verificacoes)
  //012//345//678
  //horizontal
  let vitoriaH = verificaVitoriaHorizontal();
  let vitoriaV = verificaVitoriaVertical();
  let vitoriaD = verificaVitoriaDiagonal();
  if (vitoriaH == true || vitoriaV == true || vitoriaD == true) {
    if (vez == "X") {
      placarX++;
    } else if (vez == "O") {
      placarO++;
    }
    atualizaStatus(vez + " GANHOU!");
  } else {
    let velha = verificaDeuVelha();
    if (velha == true) {
      atualizaStatus("Deu velha!");
    }
  }
}

function trocarVez() {
  if (vez == "X") {
    vez = "O";
  } else if (vez == "O") {
    vez = "X";
  }
}

function gerarVetorDeBotoes() {
  for (let i = 0; i < 9; i++) {
    let botaoElemento = document.getElementById(i);
    botoes.push(botaoElemento);
  }
}

function botao(numeroDoBotao) {
  if (botoes[numeroDoBotao].innerText == "") {
    botoes[numeroDoBotao].innerText = vez;
    verificaVitoria();
    trocarVez();
    atualizaStatus();
  }
}

var botoes = [];
gerarVetorDeBotoes();
var placarX = 0;
var placarO = 0;
var vez = "X";
atualizaStatus(" ");

console.log(botoes);
