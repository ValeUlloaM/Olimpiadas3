class Transporte {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {

        //Rectangulo de clase abuela
        noFill();
        stroke(0);
        rectMode(CENTER);
        rect(this.x, this.y, 250, 40);

        //Texto del tipo de clase
        fill(0);
        textAlign(CENTER);
        textSize(20);
        text('Clase abuela Transporte', this.x, this.y + 7);
    }
}