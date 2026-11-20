let stars=[]
let mouseClick=false
let connections = []
let selectedStar = null

function setup() {
  createCanvas(1000, 600);
  
    for (i=0;i<100;i++){
      stars.push(
        new Star(random(width), random(height), random(2,4))
      )
    }
  

  //
}

function draw() {
  background(0);
  stroke(255, 200);
  strokeWeight(1);

  for (let i = 0; i < connections.length; i++) {
    let c = connections[i];

    line(c[0].x, c[0].y, c[1].x, c[1].y);
  }

  for (let i=0; i< stars.length; i++){
    let s=stars[i]
    s. display()
    //s.move()
    
    s.ring()
    
  }
  //
}

class Star{
  constructor(x,y,dia){
    this.x=x
    this.y=y
    this.dia=dia
  }
  move(){
    this.x=this.x+sin(frameCount/10)
    this.y=this.y+sin(frameCount/10)

  }
  display(){
    fill (255)
    noStroke()
    circle (this.x,this.y,this.dia)
  }
  ring(){
    if (dist (mouseX,mouseY,this.x,this.y)<10){
      noFill()
      stroke(250, 222, 7)
      circle (this.x,this.y,this.dia+1)
    }
    
  }



}
function mousePressed() {

  for (let i = 0; i < stars.length; i++) {

    let s = stars[i];

    if (dist(mouseX, mouseY, s.x, s.y) < 10) {

      if (selectedStar == null) {
        selectedStar = s;
      } 
      else {
        connections.push([selectedStar, s]);
        selectedStar = null;
      }

      
    }
  }
}
