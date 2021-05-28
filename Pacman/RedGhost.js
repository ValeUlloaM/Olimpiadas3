class RedGhost extends Ghost{
    constructor(x, y, direction, r, g, b) {
        super(x, y, direction, r, g, b);
    }

    //Cambia la direccion aleatoreamente del fantasma rojo
    special() {
        if (frameCount % 90 == 0) {
            this.changeDirection();
        }
    }

    //Cambia la direccion aleatoreamente del fantasma rojo x2
    changeDirection() {
        this.direction = int(random(4));
    }

    //Diferentes posibles movimientos del fantasma rojo
    move() {
        switch (this.direction) {
            case 0:
                this.y--; //ARRIBA
                break;
            case 1:
                this.y++; //ABAJO
                break;
            case 2:
                this.x++; //DERECHA
                break;
            case 3:
                this.x--; //IZQUIERDA
                break;
        }

    this.special();
    }
}