class Ghost {

  //Elementos necesarios para construir un fantasma
  constructor(x, y, direction, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.direction = direction;
  }

  display() {

     //Cuerpo del fantasma
     fill(this.r,this.g,this.b);
     noStroke();
     circle(this.x, this.y, 30, 30);
     //rectMode(CENTER);
     rect(this.x, this.y + 15, 30, 38);
 
     //Ojos del fantasma
     fill(0);
     noStroke();
     ellipse(this.x - 10, this.y, 5, 10);
     ellipse(this.x + 10, this.y, 5,10);
     
     this.special(); 
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }
}