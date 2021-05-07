class Casilla {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tam = 200;
        this.estado = 0; 
    }

    paint() {
        fill(255)
        strokeWeight(4);
        rect(this.x, this.y, this.tam, this.tam);

        switch (this.estado) {
            case 0:
                fill(255);
                break;
            case 1:
                fill(0);
                textSize(170)
                textAlign(CENTER);
                text('X', this.x + 100, this.y + 150);
                textAlign(CORNER);
                break;
            case 2:
                fill(0);
                textSize(170)
                textAlign(CENTER);
                text('O', this.x + 100, this.y + 150);
                textAlign(CORNER);
                break;
        }

    }

    validateClick(mx, my) {
        if (mx > this.x && mx < this.x + 200 && my > this.y && my < this.y + 200 && this.estado === 0) {
            return true;
        } else
            return false;
    }

    setEstado(estado) {
        this.estado = estado;
    }
}