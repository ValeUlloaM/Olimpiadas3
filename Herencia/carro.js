class Carro {
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display() {

        //Rectangulo de clase padre
        noFill();
        stroke(0);
        rectMode(CENTER);
        rect(this.x, this.y, 250, 40);

        //Carro azul
        fill(this.r, this.g, this.b);
        noStroke();
        rectMode(CENTER);
        rect(this.x - 50, this.y - 60, 50, 30);

        //Texto de tipo de clase
        fill(0);
        textAlign(CENTER);
        textSize(20);
        text('Clase padre Carro', this.x, this.y + 7);

        //Llantas
        fill(0);
        circle(this.x - 70, this.y - 40, 20); //Izquierda
        circle(this.x - 30, this.y - 40, 20); //Derecha
    }
}