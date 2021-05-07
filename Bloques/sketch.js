let bloques = [];
let barra = new Barra(232, 535);
let bola = new Bola(300, 300);
let mover = false;

function setup() {
  createCanvas(630, 600);
  for (let i = 0; i < 4; i++) {
    bloques.push(new Array(4));
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      bloques[j][i] = new Bloque((37 + (j * 144)), (42 + (i * 44)));
    }
  }

}

function draw() {
  background(220);

  barra.paint();
  bola.paint();
  bola.bounce();
  validateTouch();
  Eliminate();

  if (mover) {
    barra.keyMove();
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      bloques[j][i].paint();
    }
  }
}

function keyPressed() {
  mover = true;
}
// comentario
function keyReleased() {
  mover = false;
}

function validateTouch() {

  //Zona de contacto entre bola y barra principal
  if (bola.getY() + 15 >= barra.getY() - 1 && bola.getY() + 15 <= barra.getY() + 4 &&
    bola.getX() >= barra.getX() && bola.getX() <= barra.getX() + 166) {
    bola.setVelocidadX(bola.getVelocidadX() * 1);
    bola.setVelocidadY(bola.getVelocidadY() * -1);

  }
}

function Eliminate() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if ( bola.getX()>bloques[j][i].getX()&&bola.getX()<bloques[j][i].getX()+126 && 
      bola.getY()>bloques[j][i].getY()&&bola.getY()<bloques[j][i].getY()+33&&bloques[j][i].getActive()) {
       // if (dist(bloques[j][i].getX()+126/2, bloques[j][i].getY()+33/2, bola.getX(), bola.getY()) < 20) {
       bloques[j][i].setActive(false);     
       bola.setVelocidadX(bola.getVelocidadX() * 1);
    bola.setVelocidadY(bola.getVelocidadY() * -1);  
       //bloques[j][i].setColor(255,0,0);
       //console.log(bloques[j][i]);
      }

    }
  }
}