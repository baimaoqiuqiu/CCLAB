/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new treeBaby(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class treeBaby {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    //this.speedX = sin(frameCount/10)*2
    //this.speedY = 0.5
    this.angle=0
    this.armAngle = 0
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    this.x = this.x + sin(frameCount / 30) * 1.5;
    this.y = this.y + sin(frameCount / 20) * 0.8;
    this.angle = sin(frameCount / 15) * 0.15
    this.armAngle = sin(frameCount / 10) * 0.5;
    
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    rotate(this.angle);

    noStroke()
    fill(33, 102, 28);
    triangle(0, -35, 25, 10, -25, 10);
    triangle(0, -5, 30, 30, -30, 30);


    fill(110, 65, 30);
    rect(-5, 30, 10, 15);
    fill(255);
    ellipse(-5, -5, 4, 5);
    ellipse(5, -5, 4, 5);

    fill(0);
    ellipse(-5, -5, 2, 3);
    ellipse(5, -5, 2, 3);
    stroke(110, 65, 30);
    strokeWeight(4);


    push();
    translate(-20, 5);
    rotate(-this.armAngle);
    line(0, 0, -12, -12);
    pop();


    push();
    translate(20, 5);
    rotate(this.armAngle);
    line(0, 0, 12, -12);
    pop();




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/