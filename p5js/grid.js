// p5.js consists of 2 functions: setup() and draw()

// ballblazer
// (c) 2022 kmt, mirage, ekwotech

function infinite_grid() {
  background(200);
  noFill();
  strokeWeight(4); // Thicker
 
// x only starts at 0 --> fixed
  for (let x=0;x<40;x++) {
    beginShape(LINES);
      vertex(xinc+(xstart+x)*10, 0, 100);
      vertex(xinc+(xstart+x)*10, 0, -100);
//      print (xstart+xinc+x*10);
    endShape();
    stroke((x%2)*255,200,0);
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
  xinc += 0.5;
// replace this guy ->  
if (xinc >= 10.0) xinc = 0.0;
  infinite_grid();
  orbitControl();
}