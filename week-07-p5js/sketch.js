
var drop = []


function setup() {
  createCanvas(600,600,);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
}


function draw() {
  background(51);

  // body
    circle(300, 250, 250, 200);

    // left eye
      fill(255);
      circle(265, 195, 25);
      fill(0);
      circle(265, 195, 10);

      // right eye
        fill(255);
        circle(345, 195, 25);
        fill(0);
        circle(345, 195, 10);

        // mouth
 noFill();
 arc(298, 298, 50, 50, PI * .15, PI * .50);


    for(var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();
  }
  }

  function Drop() {
    this.x = random(0, width);
    this.y = random(50, -height);

    this.show = function() {
      c = color(0,255, 0);
      strokeWeight(1)
      fill(c);
      ellipse(this.x, this.y, random(1, 5), random(1, 5));
    }
    this.update = function() {
      this.speed = random(1, 5);
      this.gravity = 1.05;
      this.y = this.y + this.speed*this.gravity;

      if (this.y > height) {
        this.y = random(50);
        this.gravity = 0;
  }
  }
  }
