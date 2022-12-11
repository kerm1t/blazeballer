function setup() {
    createCanvas(1200, 800,WEBGL);
    yinc = 1; // 2do: to go slower or faster, have a scaling factor
    ystart =1.0;
}
  
  function infinite_grid() {
    background(200);
  //  noFill();
  //  strokeWeight(1); // Thicker
  //  blendMode(SUBTRACT);
    
    // ver slow now - however much faster in https://editor.p5js.org/
    beginShape(QUAD_STRIP); // add only 2 new vertices
    for (let y=0;y<40;y++) {
        x = 0;
      if(y%2==0)
      {
        vertex(x*10,(yinc+(ystart+y)*10), 0);
        vertex(x*10,(yinc+(ystart+y+1)*10), 0);
        for (let x=0;x<20;x++) {
            vertex(x*10,(yinc+(ystart+y+1)*10), 0);
            vertex(x*10,(yinc+(ystart+y)*10), 0);    
            fill(((ystart+yinc*10+y)%2)*255,(x%2)*255,0);
        }
      }
    else
    {
        for (let x=0;x<20;x++) {
            vertex(190-x*10,(yinc+(ystart+y+1)*10), 0);
            vertex(190-x*10,(yinc+(ystart+y)*10), 0);    
            fill(((ystart+yinc*10+y)%2)*255,(x%2)*255,0);
        }
    }
  //      print (xstart+xinc+x*10);
  // hmm bit weired, x and xstart is times 10, xinc is div by 10, so we need to do some juggling here for the color
  //      stroke(((ystart+yinc*10+y)%2)*255,(x%2)*255,0);
       }
    endShape();
    }

    function draw() {
           infinite_grid();
           orbitControl();
           console.log(frameRate());
  }