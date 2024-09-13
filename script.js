let x = 0;
let x2 = 250;
let y2 = 200;
let y = 200;
let diametro = 50;
let velocidadex = 5;
let velocidadex2 = 5;
let velocidadey = 5;
let velocidadey2 = 5;

function setup() {
  createCanvas(500, 400);
  background("rgb(28,28,108)");
}

function draw() {
 background("rgb(28,28,108)");
  circulo ();
  stroke("white")
  
   circle(x, y, diametro);
  fill(color(random(0,255), random(0,255), random(0,255)));
  circle(x2, y2, 50);
    fill(color(random(0,255), random(0,255), random(0,255)));

  
  x = x + velocidadex;
  
   y = y + velocidadey;
  
  x2 = x2 + velocidadex2; 
  y2 = y2 + velocidadey2;
  
  if ( x > 500 || x < 0) {
    velocidadex *= -1;
      
      }
  
    if ( y > height || y < 0) {
    velocidadey *= -1;
      
      }
    if ( y2 > height || y2 < 0) {
    velocidadey2 *= -1;
      
      }
  
  if ( x2 > 500 || x2 < 0) {
    velocidadex2 *= -1;
      
      }
  
 function circulo () {
   
   if (mouseIsPressed) {
   let x3 = mouseX;
let y3 = mouseY;
 //   fill("white");
  circle(x3, y3, 60);
   }  
   
   
  

 }
  
  
}