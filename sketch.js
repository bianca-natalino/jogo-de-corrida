function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [100, 200, 300];

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🐻‍❄️", xJogador[0], yJogador[0]);
  text("🐼", xJogador[1], yJogador[1]);
  text("🐨", xJogador[2], yJogador[2]);
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  if (xJogador[0] > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador[1] > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador[2] > 350) {
    text("Jogador 3 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador[0] += random(20);
  }
  if (key == "s") {
    xJogador[1] += random(20);
  }
  if (key == "d") {
    xJogador[2] += random(20);
  }
}
