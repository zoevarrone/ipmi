//Zoe Varrone
//comision 2
//https://youtu.be/_kiMdyYVXfQ
PImage image;
int numFilas = 16;
int numCols = 8;
int diametroInicial = 12;
int incremento =2;
float diametroInical;
String texto= "programación1Tp3";
void setup() {
  size(800, 400);
  background(0);
  image = loadImage("circulo.jpg");

 }

void draw(){
image(image, 0,0,400,400);
  println(texto);
 //filas que aumentan de tamaño
  for (int fila = 0; fila < numFilas; fila++) {
    for (int col = 0; col < numCols; col++) {
      
      circulosaumento(fila,col);
   }
  }
     
  //filas que disminuyen de tamaño
  for (int fila = 0; fila < numFilas; fila++) {
    for (int col = 0; col < numCols; col++) {
      
      circulosdisminuir(fila,col);
   }
  }
 
} 

 
