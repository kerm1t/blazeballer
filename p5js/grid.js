// p5.js consists of 2 functions: setup() and draw()

// ballblazer
// (c) 2022 kmt, mirage, ekwotech

function infinite_grid() {
  background(200);
  noFill();
  strokeWeight(4); // Thicker
 
  for (let x=xstart+xinc;x<xstart+xinc+40;x++) {
    beginShape(LINES);
      vertex(x*10, 0, 100);
      vertex(x*10, 0, -100);
    endShape();
    }
}

// https://discourse.processing.org/t/how-to-make-a-better-zoom-with-orbitcontrol/12978/4
function zoom(event) {
    let sensitivityZoom = 0.05;
    let scaleFactor = cnv.height;
    if (event.deltaY > 0) {
        cnv._curCamera._orbit(0, 0, sensitivityZoom * scaleFactor);
    } else {
        cnv._curCamera._orbit(0, 0, -sensitivityZoom * scaleFactor);
    }
}

function setup() {
  cnv = createCanvas(1200, 800, WEBGL);

//  spiral();
//  spiral3d(); tut's ned
  cnv.mouseWheel(zoom);

// 2do: tilt camera
  xstart = -20.0;
  xinc = 0.1;
}

function draw()
{
  xinc += 0.1;
  if (xinc >= 1.0) xinc = 0.0;
  infinite_grid();
  orbitControl();
}