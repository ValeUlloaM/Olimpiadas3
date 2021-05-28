let transporte = new Transporte(200, 50);
let carro = new Carro(200, 200, 0, 0, 255);
let carroPolicia = new CarroPolicia(200, 350, 0, 0, 255, 10, 0, 255);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Pintar las clases
  transporte.display();
  carro.display();
  carroPolicia.display();

  //Pintar las flechas
  fill(0);
  stroke(4);
  line(200, 180, 200, 70); //Arriba
  line(200, 70, 180, 90);
  line(200, 70, 220, 90);
  line(200, 330, 200, 220); //Abajo
  line(200, 220, 180, 240);
  line(200, 220, 220, 240);
}