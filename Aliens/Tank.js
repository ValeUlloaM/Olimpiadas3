class Tank {
    constructor() {
        this.x = 315;
        this.y = 540;
        

    }
    show() {
        fill(3, 135, 57);
        rectMode(CENTER);
        rect(this.x, this.y, 156, 86, 23, 23, 23, 23);
        
    }

    shoot() {
        return true;
    }
    
    move(dir) {
        switch (dir) {
            case "RIGHT":
                this.x += 15
                break;
            case "LEFT":
                this.x -= 15
                break;

        }

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

}