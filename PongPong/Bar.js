class Bar {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 15;
        this.h = 100;

    }

    paint() {
        fill(192, 239, 63);
        rect(this.x, this.y, this.w, this.h);
    }

    keyMove() { //Para mover la barra derecha con el teclado

        //Limites
        if (this.y > 300) {
            this.y = 300;
        }

        if (this.y < 0) {
            this.y = 0;
        }

        //Movimiento
        if (keyCode === UP_ARROW) {
            this.y -= 2;
        } else if (keyCode === DOWN_ARROW) {
            this.y += 2;
        }
    }

    mouseMove(y) { //Para mover la barra izquierda con el mouse
        this.y = y;
    }

    validateClick(mx, my) { //Permite seleccionar la barra izquierda

        if (mx > this.x && mx < this.x + 15 && my > this.y && my < this.y + 100) {
            return true;
        }
        return false;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }



}