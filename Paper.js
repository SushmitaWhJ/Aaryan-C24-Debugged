class Paper{
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':1.0,
            'density':2.0,
            'frictionAir': 0.03,
         
        }

        
        this.x=x
        this.y=y
        this.radius=radius;
        
        this.body = Bodies.circle(this.x,this.y,this.radius, options);
        World.add(world, this.body);
      }
      
       
      display(){
        var pos =this.body.position;
        //var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("brown");
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius,this.radius);
        pop();
      }


    };