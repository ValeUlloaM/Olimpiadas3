let tank;
let aliens = [];
this.bullets = [];

function setup() {
  createCanvas(630, 600);
  tank = new Tank();
  for (let i = 0; i < 10; i++) {
    aliens.push(new Alien(random(0, 630), random(-50, 0))); //Creates Aliens
  }
}

function draw() {
  background(0);
  tank.show();
  for (let i = 0; i < 10; i++) {
    aliens[i].show()
    if (aliens[i].die) {
      aliens.splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    removeDeathBullets();
  }
}

function mousePressed() {

  this.bullets.push(new Bullet(tank.getX(), tank.getY()));

}

function keyPressed() {
  switch (key) {
    case 'd':
      tank.move("RIGHT")
      break;
    case 'a':
      tank.move("LEFT")
      break;
  }
}

function removeDeathBullets() {
  for (let i = 0; i < bullets.length; i++) {
    if (!bullets[i].isAlive()) {
      bullets.splice(i, 1);
      break;

    }

  }
}

function validateImpact() {
  for (let i = 0; i < bullets.length; i++) {
    if (dist(bullets[i].getX(), bullets[i].getY(),aliens[i].getX(), aliens[i].getY()) < bullets[i].getTam()/2 ){
      aliens.splice(i,1);
    }
  }
}


