function setup() {
  // put setup code here
//  createCanvas(1500, 800, WEBGL);
  size(400, 400, P3D);
}

function draw() {
  // put drawing code here
//  size(400, 400, P3D);
/*  noStroke();
  lights();
  translate(232, 192, 0);
  sphere(112);
  */

// https://p5js.org/examples/form-3d-primitives.html
  background(100);

//  noStroke();
  fill(50);
  stroke(255);
  push();
  translate(-275, 175);
  rotateY(1.25);
  rotateX(-0.9);
  box(100);
  pop();

  noFill();
  stroke(255);
  push();
  translate(500, height * 0.35, -200);
  sphere(300);
  pop();
}
