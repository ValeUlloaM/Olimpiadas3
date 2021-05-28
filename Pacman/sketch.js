let pacman = new Pacman(50, 50);
let redGhost = new RedGhost(100, 100, 1, 255, 0, 0);
let greenGhost = new GreenGhost(200, 100, 0, 0, 255, 0);

let gold = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  //Se crea un arreglo para las monedas
  for (let i = 0; i < 40; i++) {
    let x = Math.random() * (400 - 6) + 6;
    let y = Math.random() * (400 - 6) + 6;
    gold.push(new Gold(x, y, 255, 0, 0));
  }
}

function draw() {
  background(0);

  //Pinta el pacman 
  pacman.display();

  //Movimiento en todas la direcciones para el pacman 
  function validateKey() {
    if (keyIsDown(97) || keyIsDown(65)) {
      pacman.move(key);
    }
    if (keyIsDown(68) || keyIsDown(100)) {
      pacman.move(key);
    }
    if (keyIsDown(87) || keyIsDown(119)) {
      pacman.move(key);
    }
    if (keyIsDown(83) || keyIsDown(115)) {
      pacman.move(key);
    }
  }

  //Se valida la pisición del pacman y de las monedas para que se las coma
  validateKey();
  for (let i = 0; i < gold.length; i++) {
    gold[i].display();
    if (gold[i].eat(pacman.getX(), pacman.getY(), 40/2)) {
      gold.splice(i, 1);
    }
  }

  //Cuando se pierde al tocar el fantasma rojo
  if (pacman.gameOver(redGhost.getX(), redGhost.getY(), 30)) {
    console.log("Game Over");
    location.reload();
  }

  redGhost.display(); //Se pinta el fantasma rojo
  redGhost.move(); //Se mueve el fantasma rojo
  
  //Cuando se pierde al tocar el fantasma verde
  if (pacman.gameOver(greenGhost.getX(), greenGhost.getY(), 30)) {
    console.log("Game Over");
    location.reload();
  }

  greenGhost.display(); //Se pinta el fantasma verde 
  greenGhost.move(); //Se mueve el fantasma verde
}