class Usuario {
    constructor(x, y, rCuadrado, gCuadrado, bCuadrado, rPiel, gPiel, bPiel, rRopa, gRopa, bRopa,
        rPelo, gPelo, bPelo, genero) {
        this.x = x;
        this.y = y;
        this.rCuadrado = rCuadrado;
        this.gCuadrado = gCuadrado;
        this.bCuadrado = bCuadrado;
        this.rPiel = rPiel;
        this.gPiel = gPiel;
        this.bPiel = bPiel;
        this.rRopa = rRopa;
        this.gRopa = gRopa;
        this.bRopa = bRopa;
        this.rPelo = rPelo;
        this.gPelo = gPelo;
        this.bPelo = bPelo;
        this.genero = genero;

    }

    Pintar() {

        noStroke();
        //Cuadrados del fondo
        fill(this.rCuadrado, this.gCuadrado, this.bCuadrado);
        rect(this.x, this.y, 262, 293, 42);

        //Cuerpo
        fill(this.rPiel, this.gPiel, this.bPiel);
        ellipse(this.x + 67, this.y + 127, 20, 20); //Oreja izquierda
        ellipse(this.x + 191, this.y + 127, 20, 20); //Oreja derecha

        if (this.genero === true) { //Mujer
            fill(this.rPelo, this.gPelo, this.bPelo);
            rect(this.x + 66, this.y + 130, 126, 85, 0, 0, 27);
        }
        //Cara
        fill(this.rPiel, this.gPiel, this.bPiel);
        rect(this.x + 73, this.y + 47, 112, 148, 0, 0, 57, 57); //Cabeza
        fill(0);
        circle(this.x + 110, this.y + 112, 8); // Ojo izquierdo
        circle(this.x + 144, this.y + 112, 8); // Ojo derecho
        fill(255);
        rect(this.x + 105, this.y + 133, 48, 21, 0, 0, 21, 21); //Boca

        //Cabello
        fill(this.rPelo, this.gPelo, this.bPelo);
        rect(this.x + 59, this.y + 35, 47, 65, 44, 0, 20, 0); //Capul
        rect(this.x + 105, this.y + 35, 93, 65, 0, 46, 0, 37); //Capul
        rect(this.x + 66, this.y + 100, 7, 30); //Patilla izquierda
        rect(this.x + 185, this.y + 100, 7, 30); //Patilla derecha


        //Camiseta
        fill(this.rRopa, this.gRopa, this.bRopa);
        rect(this.x + 64, this.y + 187, 135, 107, 57, 57, 0, 0);

        //Cuello
        fill(this.rPiel, this.gPiel, this.bPiel);
        rect(this.x + 104, this.y + 187, 54, 35, 0, 0, 27, 27); //Cuello










    }
}