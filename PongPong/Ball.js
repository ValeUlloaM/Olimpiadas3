class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diametro = 20;
        this.velocidadX = 2;
        this.velocidadY = 2;
    }

    paint() {
        noStroke();
        fill(249, 53, 183);
        ellipse(this.x, this.y, this.diametro, this.diametro);
    }

    bounce() { //Movimiento de la bola
        this.x = this.x + this.velocidadX;
        this.y = this.y + this.velocidadY;

        // Limites
        if (this.x > 400 || this.x < 0) {
            this.velocidadX = this.velocidadX * -1;
        }
        if (this.y > 400 || this.y < 0) {
            this.velocidadY = this.velocidadY * -1;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getVelocidadX() {
        return this.velocidadX;
    }

    getVelocidadY() {
        return this.velocidadY;
    }

    setVelocidadX(velX) {
        this.velocidadX = velX;
    }

    setVelocidadY(velY) {
        this.velocidadY = velY;
    }

}