// p5.js consists of 2 functions: setup() and draw()

// ballblazer
// (c) 2022 kmt, mirage, ekwotech

let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20

function setup_cam() {
  //create sliders
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
  describe(
    'White square repeatedly grows to fill canvas and then shrinks. An interactive example of a red cube with 3 sliders for moving it across x, y, z axis and 3 sliders for shifting its center.'
  );
}

function set_cam() {
  // assigning sliders' value to each parameters
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);  
}

function infinite_grid() {
  background(200);
//  noFill();
  strokeWeight(0); // Thicker
  blendMode(SUBTRACT);
  
  // ver slow now - however much faster in https://editor.p5js.org/
  for (let y=0;y<40;y++) {
    beginShape(QUAD_STRIP); // add only 2 new vertices
    x = 0;
    vertex(-10+x*10,(yinc+(ystart+y)*10), 0);
    vertex(-10+x*10,(yinc+(ystart+y+1)*10), 0);
    for (let x=0;x<20;x++) {
      vertex(-10+x*10,(yinc+(ystart+y+1)*10), 0);
      vertex(-10+x*10,(yinc+(ystart+y)*10), 0);
//      print (xstart+xinc+x*10);
// hmm bit weired, x and xstart is times 10, xinc is div by 10, so we need to do some juggling here for the color
//      stroke(((ystart+yinc*10+y)%2)*255,(x%2)*255,0);
      fill(((ystart+yinc*10+y)%2)*255,(x%2)*255,0);
    }
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
  setup_cam();

//  spiral();
//  spiral3d(); tut's ned
  cnv.mouseWheel(zoom);

// 2do: tilt camera
  ystart = 0;
  yinc = 0;
}

function draw()
{
  set_cam();
  yinc += 1; // 2do: to go slower or faster, have a scaling factor
  if (yinc%10==0)
  {
    ystart -=1.0;
  }

  infinite_grid();
  orbitControl();
  console.log(frameRate());
}