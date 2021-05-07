let usuario1 = new Usuario(57, 136, 30, 144, 255, 242, 175, 159, 237, 64, 66, 251, 223, 98, false);
let usuario2 = new Usuario(375, 136, 192, 239, 63, 242, 175, 159, 249, 59, 183, 66, 33, 11, true);
let usuario3 = new Usuario(692, 136, 251, 223, 98, 213, 123, 70, 30, 144, 255, 0, 0, 0, false);
let usuario4 = new Usuario(1010, 136, 249, 59, 183, 242, 175, 159, 192, 239, 63, 251, 223, 98, true);

function setup() {
  createCanvas(1329, 600);
}

function draw() {
  background(220);
  usuario1.Pintar();
  usuario2.Pintar();
  usuario3.Pintar();
  usuario4.Pintar();
}