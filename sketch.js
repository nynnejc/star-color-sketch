let ellipseColor = (255, 0, 0);
let value = 0;

function setup() {
  createCanvas(900, 900);
  frameRate(15);
  background(255, 255, 255);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  fill(ellipseColor, 43);
  noStroke();
  strokeWeight(2);
  beginShape();
  vertex(0, -50);
  vertex(14, -20);
  vertex(47, -15);
  vertex(23, 7);
  vertex(29, 40);
  vertex(0, 25);
  vertex(-29, 40);
  vertex(-23, 7);
  vertex(-47, -15);
  vertex(-14, -20);
  endShape(CLOSE);
 
  fill(ellipseColor, 63);
  strokeWeight(5);
  // stroke(255, 255, 255);
  noStroke();
  ellipse(mouseX, mouseY, 200, 200);
   pop();
}


function keyPressed() {
  if (keyPressed == true) {
    ellipseColor = color(random(255), random(255), random(255));
  }
}

function mouseClicked() {
  if (value == 0) {
    ellipseColor = color(random(255), random(255), random(255));
  } else {
    value = 0;
  }
}