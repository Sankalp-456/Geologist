class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("magenta");
      circle(0, 0, this.radius);
      pop();
    }
  };