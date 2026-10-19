//set the variables
let x3;
let y3;
let a;
let b;
let r;
let g;
let bl;
let count = 0;
let t = 100;
let ran1
let ran2 
let y2
let dia
let x2
let light=50

let xSpeed;
let ySpeed;
let dragging = false;
let isDying = false;
let rings = [];

function setup() {
  createCanvas(800, 500);

  x3 = width / 2;
  y3 = height / 2;

  a = random(50, 100);
  b = random(50, 100);

  r = random(255);
  g = random(255);
  bl = random(255);
  xSpeed = random(-2, 2);
  ySpeed = random(-2, 2);
  x2=random(0,800)
  y2=random(450,480)
  dia=random(10,30)
}

function draw() {
  //background
  background(47, 63, 135);
  ran1=random(-20,20)
  ran2=random(-20,20)
  for(let y=0;y<=500;y=y+20){
    noStroke()
    fill(47-y/5, 63-y/5, 135-y/5)
    rect(0,y,800,20)
  }

  drawCreature(x3, y3);
}
function drawCreature() {
  //floating
  if (!dragging && !isDying) {
    x3 = x3 + xSpeed;
    y3 = y3 + ySpeed;
  }

  if (x3 > width - a / 2) {
    x3 = width - a / 2;
    xSpeed = xSpeed * -1;
  }

  if (x3 < a / 2) {
    x3 = a / 2;
    xSpeed = xSpeed * -1;
  }

  if (y3 > height - b / 2) {
    y3 = height - b / 2;
    ySpeed = -1 * ySpeed;
  }

  if (y3 < b / 2) {
    y3 = b / 2;
    ySpeed = -1 * ySpeed;
  }
//the light ring
  noStroke();
  let change = map(sin(frameCount / 100), -1, 1, -0.5, 0.5);
  light=light+change
  for (let ring of rings) {
    fill(ring.r, ring.g, ring.bl, light);
    circle(ring.x, ring.y, ring.size);
  }

  if (isDying) {
    t = t - 3;
//use ai and reference to learn the function
    if (t <= 0) {
      rings.push({
        x: x3,
        y: y3,
        size: random(25,100),
        r: r,
        g: g,
        bl: bl,
      });

      x3 = random(60, width - 60);
      y3 = random(60, height - 60);

      a = random(30, 100);
      b = random(30, 100);

      r = random(255);
      g = random(255);
      bl = random(255);

      xSpeed = random(-2, 2);
      ySpeed = random(-2, 2);

      t = 100;
      count = 0;
      isDying = false;
    }
  }

  noStroke();

  push();
  translate(x3, y3);

  noStroke();
//the creature
  for (let i = 10; i > 0; i = i - 1) {
    let size = i / 10;
    fill(r, g, bl, t * (1 - size * 0.7));
    ellipse(0, 0, a * size, b * size);
  }
//blink
  if (mouseIsPressed) {
    stroke(255, t);
    strokeWeight(2);
    line(-15, 0, -5, 0);
    line(5, 0, 15, 0);
  } else {
    noStroke();

    fill(255, t);
    circle(-10, 0, 10);
    circle(10, 0, 10);

    fill(0, t);
    circle(-10, 0, 2);
    circle(10, 0, 2);
  }

  pop();
  //breath
  let breath = map(sin(frameCount / 100), -1, 1, -0.2, 0.2);

  if (!isDying) {
    a = a + breath;
    b = b + breath;
  }

  if (a > 150) {
    a = 150;
  }

  if (b > 150) {
    b = 150;
  }
//drag
  if (mouseIsPressed && dragging && !isDying) {
    x3 = mouseX;
    y3 = mouseY;
  }
}
//mouse interaction
function mousePressed() {
  let d = dist(mouseX, mouseY, x3, y3);

  if (d < a / 2 && !isDying) {
    dragging = true;
  }
}

function mouseReleased() {
  dragging = false;
}

function mouseClicked() {
  let d = dist(mouseX, mouseY, x3, y3);

  if (d < a / 2 && !isDying) {
    count = count + 50;
  }

  if (count >= 100) {
    isDying = true;
    dragging = false;
  }
}
