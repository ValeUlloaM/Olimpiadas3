let bola = new Ball(200, 200);
let barraIzquierda = new Bar(20, 150);
let barraDerecha = new Bar(360, 150);
let atrapar = false; //Para el movimiento con el mouse
let mover = false; //Para el movimiento con el teclado
let scoreIzq = 0; //Jugador 1
let scoreDer = 0; //Jugador 2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  bola.paint();
  bola.bounce();
  barraIzquierda.paint();
  barraDerecha.paint();
  if (mover) {
    barraDerecha.keyMove();
  }
  validateTouch();

  //Puntos por jugador
  textSize(18);
  textAlign(CENTER);
  fill(255);
  text('Score: ' + scoreIzq, 101, 37);
  text('Score: ' + scoreDer, 299, 37);
}

function keyPressed() {
  mover = true;
}

function keyReleased() {
  mover = false;
}

function validateTouch() {

  //Zona de contacto entre bola y barra izquierda
  if (bola.getX() - 8 >= barraIzquierda.getX() + 11 && bola.getX() - 8 <= barraIzquierda.getX() + 16 &&
    bola.getY() >= barraIzquierda.getY() && bola.getY() <= barraIzquierda.getY() + 100) {
    bola.setVelocidadX(bola.getVelocidadX() * -1);
    bola.setVelocidadY(bola.getVelocidadY() * 1);
    scoreIzquierda();

  }
  //Zona de contacto entre bola y barra derecha
  if (bola.getX() + 8 >= barraDerecha.getX() - 1 && bola.getX() + 8 <= barraDerecha.getX() + 4 &&
    bola.getY() >= barraDerecha.getY() && bola.getY() <= barraDerecha.getY() + 100) {
    bola.setVelocidadX(bola.getVelocidadX() * -1);
    bola.setVelocidadY(bola.getVelocidadY() * 1);
    scoreDerecha();
  }
}

function mousePressed() {
  if (barraIzquierda.validateClick(mouseX, mouseY)) {
    atrapar = true;
  }
}

function mouseDragged() {
  if (atrapar === true) {
    barraIzquierda.mouseMove(mouseY);
  }

  if (barraIzquierda.getY() > 300) {
    barraIzquierda.setY(300);
  }

  if (barraIzquierda.getY() < 0) {
    barraIzquierda.setY(0);;
  }
}

function mouseReleased() {
  atrapar = false;
}

function scoreIzquierda() {
  scoreIzq = scoreIzq + 1
}

function scoreDerecha() {
  scoreDer = scoreDer + 1
}