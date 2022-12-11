// p5.js consists of 2 functions: setup() and draw()

// ballblazer
// (c) 2022 kmt, mirage, ekwotech

function infinite_grid() {
  background(200);
//  noFill();
  strokeWeight(1); // Thicker
 
// x only starts at 0 --> fixed
  for (let x=0;x<40;x++) {
    beginShape(QUADS);
      vertex((xinc+(xstart+x)*10), 0, 100);
      vertex((xinc+(xstart+x+1)*10), 0, 100);
      vertex((xinc+(xstart+x+1)*10), 0, -100);
      vertex((xinc+(xstart+x)*10), 0, -100);
//      print (xstart+xinc+x*10);
    endShape();
// hmm bit weired, x and xstart is times 10, xinc is div by 10, so we need to do some juggling here for the color
    stroke(((xstart+xinc*10+x)%2)*255,200,0);
    fill(((xstart+xinc*10+x)%2)*255,200,0);
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
  xstart = 0;
  xinc = 0;
}

function draw()
{
  xinc += 1;
// replace this guy ->  
//if (xinc >= 10.0)
print(xinc)
if (xinc%10==0)
{
xstart -=1.0;
//  xinc = 0.0;
}
infinite_grid();
  orbitControl();
}