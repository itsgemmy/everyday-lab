/**
 * fairy dust - Generative art sketch in Processing-style with p5.js
 * Flow fields + particles. Click to add turbulence; press 's' to save a frame.
 */

let particles = [];
let flowField = [];
let cols, rows;
let inc = 0.08;
let zoff = 0;
let fieldStrength = 1.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  cols = floor(width / 24) + 1;
  rows = floor(height / 24) + 1;
  flowField = new Array(cols * rows);

  for (let i = 0; i < 280; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: 0,
      vy: 0,
      hue: random(220, 280),
      alpha: random(80, 180),
      weight: random(0.6, 1.8),
    });
  }
  colorMode(HSB, 360, 100, 100, 255);
  background(10, 8, 6);
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let angle = noise(xoff, yoff, zoff) * TAU * 2;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(fieldStrength);
      flowField[x + y * cols] = v;
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.004;

  for (let p of particles) {
    let col = floor(constrain(p.x / 24, 0, cols - 1));
    let row = floor(constrain(p.y / 24, 0, rows - 1));
    let idx = col + row * cols;
    let force = flowField[idx];

    p.vx += force.x * 0.4;
    p.vy += force.y * 0.4;
    p.vx *= 0.98;
    p.vy *= 0.98;
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.x = (p.x + width) % width;
    if (p.y < 0 || p.y > height) p.y = (p.y + height) % height;

    noFill();
    stroke(p.hue, 55, 92, p.alpha);
    strokeWeight(p.weight);
    point(p.x, p.y);
  }
}

function mousePressed() {
  zoff += 0.2;
  for (let p of particles) {
    let d = dist(mouseX, mouseY, p.x, p.y);
    if (d < 120) {
      let a = atan2(p.y - mouseY, p.x - mouseX);
      p.vx += cos(a) * 2;
      p.vy += sin(a) * 2;
    }
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("generative-" + frameCount, "png");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / 24) + 1;
  rows = floor(height / 24) + 1;
  flowField = new Array(cols * rows);
}
