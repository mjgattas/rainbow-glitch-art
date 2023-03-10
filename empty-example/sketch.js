function setup() {
  createCanvas(1080, 1080);
  background(200);
  frameRate(30);
}

function draw() {
  if (frameCount === 1){
    capturer.start();
  }

  for (let i = 0; i < width; i++) {
    blendMode(BLEND);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    stroke(r, g, b);
    let x = random(width);
    let y = random(height);
    line(x, y, x + random(-300, 300), y);

    if (r < 10) {
      noStroke();
      fill(random(255), random(255), random(255));
      blendMode(EXCLUSION);
      square(x, y, 15);

      fill(random(255), random(255), random(255));
      blendMode(SCREEN);
      square(random(width), random(height), 5);
    }
  }
  if (frameCount < 481) {
    capturer.capture(canvas);
  } else if (frameCount === 481) {
    capturer.save();
    capturer.stop();
  }
}
