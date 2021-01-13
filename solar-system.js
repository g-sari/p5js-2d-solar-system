var baseSpeed;
var sunSpeed;
var earthSpeed;
var moonSpeed;

function setup() {
    createCanvas(900, 800);
}

function draw() {
    background(0);
    baseSpeed = frameCount;

    // SUN
    push();
    rectMode(CENTER);
    translate(width/2, height/2);
    sunSpeed = baseSpeed/3;
    rotate(radians(sunSpeed));
    createPlanet(color(255,150,0), 200, 0, 0);

    // EARTH
    earthSpeed = baseSpeed;
    rotate(radians(earthSpeed));
    translate(300, 0); // add 100px to the sun's size
    createPlanet(color(5, 140, 240), 80, 0, 0);

    // MOON
    moonSpeed = -baseSpeed*2;
    rotate(radians(moonSpeed));
    translate(100, 0); // add 20px to the earth's size
    createPlanet(color(255,255,255), 30, 0, 0);

    // What if the moon had an asteroid that was stuck in orbit around the moon?
    // ASTROID
    rotate(radians(moonSpeed*2));
    translate(25,0);
    createPlanet(color(125,0,0), 10, 0, 0, false);

    pop();
}

function createPlanet(c, size, x, y, drawLine = true) {
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(x, y, size, size);
    if(drawLine == true) {
        line(0, 0, size/2, 0);
    }
}
