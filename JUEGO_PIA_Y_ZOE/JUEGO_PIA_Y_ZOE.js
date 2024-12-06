//Zoe Varrone y Pia Sena Ikes comision 2
let jugador;
let pelotas = [];
let juego;
let boton;
let estadoJuego = 'inicio';
let botonJugar;
let botonCreditos;
let botonVolver;
let botonReiniciar;
let botonInstrucciones;
let jugadorImg; // Imagen del jugador
let pelotaverdeImg;
let pelotarojaImg;
let fondoImg;
let fondoinicioImg;
let fondoperdisteImg;
let fondoganasteImg;

function preload() {
  // Cargar la imagen del jugador
  jugadorImg = loadImage("data/jugador.png"); // Asegúrate de que el archivo "jugador.png" esté en la misma carpeta
pelotaVerdeImg = loadImage('data/pelotaVerde.png'); // Imagen de las pelotas verdes
pelotaRojaImg = loadImage('data/pelotaRoja.png'); 
fondoImg = loadImage('data/fondo.jpg'); // Carga la imagen del fondo
fondoinicioImg = loadImage('data/fondoinicio.png');
fondoperdisteImg = loadImage('data/fondoperdiste.png');
fondoganasteImg = loadImage('data/fondoganaste.png');

}

function setup() {
  createCanvas(640, 480);
  botonJugar = new Boton(width / 2 - 100, height / 2 - 25, 200, 50, "Jugar");
  botonCreditos = new Boton(20, height - 70, 150, 40, "Créditos");
  botonVolver = new Boton(width / 2 - 100, height / 2 + 35, 200, 50, "Volver");
  botonReiniciar = new Boton(width / 2 - 100, height / 2 + 35, 200, 50, "Reiniciar");
  botonInstrucciones = new Boton(20, height - 130, 150, 40, "Instrucciones");

  juego = new Juego();

  // Crear el jugador
  jugador = new Jugador(width / 2, height - 50);

  // Pelotas verdes y rojas
  for (let i = 0; i < 10; i++) {
    pelotas.push(new Pelota(random(width), random(height), i % 2 === 0));
  }
}

function draw() {
  background(250);
  image(fondoImg, 320, 240, width, height); 

  if (estadoJuego === 'inicio') {
    mostrarPantallaInicio();
  } else if (estadoJuego === 'jugando') {
    juego.actualizar();
    juego.mostrar();
    jugador.mover();
    jugador.mostrar();

    for (let pelota of pelotas) {
      pelota.mostrar();
      pelota.mover();
      if (jugador.atrapar(pelota)) {
        pelota.reiniciar();
      }
    }

    if (juego.puntos >= 100) {
      estadoJuego = 'ganaste';
    }

    if (juego.vidas <= 0) {
      estadoJuego = 'perdiste';
    }
  } else if (estadoJuego === 'ganaste') {
    mostrarPantallaGanaste();
  } else if (estadoJuego === 'perdiste') {
    mostrarPantallaPerdiste();
  } else if (estadoJuego === 'creditos') {
    mostrarPantallaCreditos();
  } else if (estadoJuego === 'instrucciones') {
    mostrarPantallaInstrucciones();
  }
}

function mostrarPantallaInicio() {
  background(255, 165, 0);
  image (fondoinicioImg, 0, 0, width, height);
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(0);
  text("¡Candace en acción!", width / 2, height / 3);

  botonJugar.mostrar();
  botonCreditos.mostrar();
  botonInstrucciones.mostrar();

  if (botonJugar.pulsado()) {
    estadoJuego = 'jugando';
    juego.iniciar();
  }

  if (botonCreditos.pulsado()) {
    estadoJuego = 'creditos';
  }

  if (botonInstrucciones.pulsado()) {
    estadoJuego = 'instrucciones';
  }
}

function mostrarPantallaInstrucciones() {
  background(255, 165, 0);
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Como jugar:", width / 2, height / 4);

 text(
    "a\n" +
    "a\n" +
    "a\n" +
    "a\n" +
    "a\n" +
    "Sos Candace! Podes moverte usando las flechas del teclado.\n" +
    "Tenes que atrapar a tu mamá para sumar puntos.\n" +
    "Cada mamá atrapada te da 10 puntos.\n" +
    "Si tocas a Phineas, perdés una vida. Tenes un total de 3 vidas.\n" +
    "¡Consigue 100 puntos para ganar!",width / 2,  height / 3 );



  botonVolver.mostrar();

  if (botonVolver.pulsado()) {
    estadoJuego = 'inicio';
  }
}

function mostrarPantallaGanaste() {
  image(fondoganasteImg, 320, 240, width, height); 
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Ganaste!", width / 2, height / 3);
  text("Puntos: " + juego.puntos, width / 2, height / 2);

  botonReiniciar.mostrar();

  if (botonReiniciar.pulsado()) {
    estadoJuego = 'inicio';
    juego.iniciar();
  }
}

function mostrarPantallaPerdiste() {
  image(fondoperdisteImg, 320, 240, width, height); 
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Perdiste!", width / 2, height / 3);

  botonReiniciar.mostrar();

  if (botonReiniciar.pulsado()) {
    estadoJuego = 'inicio';
    juego.iniciar();
  }
}

function mostrarPantallaCreditos() {
  background(255, 165, 0);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Zoe Varrone y Pia Sena Ikes, Comisión 2", width / 2, height / 2 - 50);

  botonVolver.mostrar();

  if (botonVolver.pulsado()) {
    estadoJuego = 'inicio';
  }
}
