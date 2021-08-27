class Stone {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.radius = 40;
  
      this.body = Bodies.circle(x, y, this.radius, this.radius,options);
  
      this.image = loadImage("stone.png");
      this.animation = [this.image]
      this.isSink=false;
      this.trajectory = [];
      World.add(world, this.body);
    }   
    display() 
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, 0, this.radius,this.radius);
        pop();
    
        if (this.body.velocity.x > 0 && this.body.position.x > 300) 
        {
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }
    
        for (var i = 0; i < this.trajectory.length; i++) 
        {
          image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
        }
    }
}