// from: https://github.com/processing/p5.js/issues/4335
let rows = 40;
let cols = 60;
let scl = 10;
let yinit = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  frameRate(24);
}

function draw() {
  // generating terrain using perlin noise
  let heights = [];
  yinit -= 0.1;
  let yoff = yinit;
  background(200);
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    height_row = []
    for (let x = 0; x < cols; x++) {
      height_row.push(map(noise(yoff, xoff), 0, 1, -100, 100));
      xoff += 0.1;
    }
    heights.push(height_row);
    yoff += 0.1;
  }
  
  translate(-width/2 - 50, -height/2 + 100);
  rotateX(PI/4);
  noStroke();

  pointLight(0, 250, 255, -width, 0, 500);
  ambientMaterial(50, 200, 100);
  
  /*
  Using triangle strips, the lighting does not   <-- this is fixed in my version
  work correctly.
  */
  for (let y=0; y<rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x=0; x<cols; x++) {
      vertex(x * scl, y * scl, heights[y][x]);
      vertex(x * scl, (y + 1) * scl, heights[y + 1][x]);
    }
    endShape();
  } 
  
  /*
  If we draw the exact same terrain but using triangles
  instead of triangle strips, the pointLight works fine:  <-- this is very slow!
  
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols - 1; x++) {
      beginShape();
      vertex(x * scl, y * scl, heights[y][x]);
      vertex(x * scl, (y + 1) * scl, heights[y + 1][x]);
      vertex((x + 1) * scl, y * scl, heights[y][x + 1]);
      endShape();

      beginShape();
      vertex((x + 1) * scl, y * scl, heights[y][x + 1]);
      vertex(x * scl, (y + 1) * scl, heights[y + 1][x]);
      vertex((x + 1) * scl, (y + 1) * scl, heights[y + 1][x + 1]);
      endShape();
    }
  } */
  
  // also, without drawing a 3D primitive after, the triangles aren't lit properly
  box(10); 
}