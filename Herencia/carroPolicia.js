class CarroPolicia {
    constructor(x, y, r, g, b, lado, black, white) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.lado = lado;
        this.black = black;
        this.white = white;
    }

    display() {

        //Rectangulo de la clase hija
        noFill();
        stroke(0);
        rectMode(CENTER);
        rect(this.x, this.y, 300, 40);

        //carro azul
        fill(this.r, this.g, this.b);
        noStroke();
        rectMode(CENTER);
        rect(this.x - 50, this.y - 60, 50, 30);

        //Cuadros blancos de policia
        fill(this.white);
        rect(this.x - 50, this.y - 55, this.lado + 40, this.lado + 10);

        //Cuadros negros de policia
        fill(this.black);
        //abajo
        rect(this.x - 70, this.y - 50, 10, 10);
        rect(this.x - 50, this.y - 50, 10, 10);
        rect(this.x - 30, this.y - 50, 10, 10);
        //arriba
        rect(this.x - 60, this.y - 60, 10, 10);
        rect(this.x - 40, this.y - 60, 10, 10);

        //Texto del tipo de clase
        fill(this.black);
        textAlign(CENTER);
        textSize(20);
        text('Clase nieta Carro de Policia', this.x, this.y + 7);

        //Llantas
        fill(this.black);
        circle(this.x - 70, this.y - 40, 20); //Izquierda
        circle(this.x - 30, this.y - 40, 20); //Derecha
    }
}