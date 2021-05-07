let cuadros = [];
let turno = true;

function setup() {
  createCanvas(800, 900);
  for (let i = 0; i < 3; i++) {
    cuadros.push(new Array(3));
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cuadros[j][i] = new Casilla((100 + j * 200), (135 + i * 200));
    }
  }

}

function draw() {
  background(220);

  // Titulo
  fill(249, 59, 183);
  textSize(64)
  textAlign(CENTER);
  text('TRIQUI', 400, 73);
  textAlign(CORNER);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cuadros[j][i].paint();
    }
  }

  //winner();
}


function mousePressed() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (cuadros[j][i].validateClick(mouseX, mouseY)) {
        if (turno) {
          cuadros[j][i].setEstado(1);
        } else {
          cuadros[j][i].setEstado(2);
        }
        turno = !turno;
      }
    }
  }
}

//function winner() {
 // for (let i = 0; i < 3; i++) {
    //for (let j = 0; j < 3; j++) {
      //if (((cuadros[0][0] && cuadros[1][0] && cuadros[2][0]) === cuadros[j][i].setEstado(1))||
        //((cuadros[0][1] && cuadros[1][1] && cuadros[2][1]) === cuadros[j][i].setEstado(1)) ||
        //((cuadros[0][2] && cuadros[1][2] && cuadros[2][2]) === cuadros[j][i].setEstado(1)) ||
       //((cuadros[0][0] && cuadros[0][1] && cuadros[0][2])  === cuadros[j][i].setEstado(1)) ||
        //((cuadros[1][0] && cuadros[1][1] && cuadros[1][2]) === cuadros[j][i].setEstado(1)) ||
       // ((cuadros[2][0] && cuadros[2][1] && cuadros[2][2]) === cuadros[j][i].setEstado(1)) ||
       // ((cuadros[0][0] && cuadros[1][1] && cuadros[2][2]) === cuadros[j][i].setEstado(1)) ||
       // ((cuadros[2][0] && cuadros[1][1] && cuadros[0][2]) === cuadros[j][i].setEstado(1))) {
        
       //fill(0)
       // textSize(64)
       // textAlign(CENTER);
       // text('Gano X!', 400, 850);
       // textAlign(CORNER);
      //}

    //}
 // }
//}