class Particle{
 constructor(x,y,r){
     var options = {
         restitution :0.4,
         // friction : 1.0
     }

    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options);
    this.colour = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
 }

    display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill(this.colour);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}