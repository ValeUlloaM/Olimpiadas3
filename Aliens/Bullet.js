class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tam = 8;
        this.alive = true;
        this.refAlien;
    }

    show() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.x, this.y, this.tam, this.tam)
        this.move();
    }

    move() {
        this.y--;
        if (this.y < 0) {
            this.alive = false;
        }
    }

    isAlive() {
        return this.alive;
    }


    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTam() {
        return this.tam;
    }


    
}