
//Varrone Zoe
//Comision 2
PImage iglu;


void setup() {
  
  size(800,400);
  background(204, 241, 252);
  
  iglu = loadImage("iglu.jpg");
  
}

void draw(){
  image(iglu,0,0);
  //montañas
  noStroke();
  fill(205, 222, 227);
  triangle(400, 315, 700,80,1500,315);
  triangle(400, 315, 400,100,800,315);
  
  //piso
  fill(255);
  rect(400, 305, 400, 100);
  
  //pino1
  noStroke();
  fill(22, 113, 40);
  triangle(400, 320, 400, 70, 490, 320);
  triangle(400, 150, 400, 70, 460, 150);
  triangle(400, 220, 400, 70, 470, 220);
  fill(255);
  triangle(402, 147, 401, 72, 455, 147);
  triangle(402, 218, 401, 72, 465, 217);
  triangle(402, 317, 401, 72, 485, 317);
  
  
  //pino 2
   noStroke();
  fill(22, 113, 40);
  triangle(470, 320, 510, 120, 550, 320);
  triangle(490, 180, 510, 120, 530, 180);
  fill(255);
  triangle(477, 320, 510, 120, 543, 320);
  triangle(493, 177, 510, 120, 527, 177);
  
  //pino 3
   noStroke();
  fill(22, 113, 40);
  triangle(600, 320, 640, 100, 680, 320);
  triangle(600, 200, 640, 100, 680, 200);
  triangle(592, 250, 640, 100, 690, 250);
  triangle(600, 320, 640, 100, 700, 320);
  fill(255);
  triangle(600, 320, 640, 100, 697, 320);
  triangle(604, 197, 640, 100, 675, 197);
 triangle(596, 247, 640, 100, 686, 247);
  
  //iglu
  fill(230, 240, 230);
  circle(540, 325, 260);
  stroke(200,203,200);
  circle(650, 325, 85);
  stroke(200,203,200);
  fill(220,217,217);
  ellipse(650, 335, 40, 65);
  noStroke();
  fill(255);
  rect(400, 350, 400, 70);
  
}
