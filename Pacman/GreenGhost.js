class GreenGhost extends Ghost {
    constructor(x, y, direction, r, g, b) {
        super(x, y, direction, r, g, b);
    }

    special() {
        this.bounce();
    }

    bounce() {
        if (this.y > 370) {
            this.direction = 0;
        } else if (this.y < 10) {
            this.direction = 1;
        }
    }

    move() {
        if (this.direction === 0) {
            this.y--;
        } else {
            this.y++;
        }
    }
}