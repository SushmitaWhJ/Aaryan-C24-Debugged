
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var bucketWall1,bucketWall2,bucketBase;
var ground;


function setup() {
	createCanvas(800, 700);
      
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-35, width,10);
	
	paperBall = new Paper(200,height-60,20);
	
	bucketWall= new Bucket(600,height-90,15,100);
	bucketWall2=new Bucket(725,height-90,15,100);
	bucketBase=new Bucket(663,height-45,135,15);
  
}


function draw() {

  background(0);


 Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY)

  ground.display();
  paperBall.display();
  bucketWall.display();
  bucketWall2.display();
  bucketBase.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});

  
	}
}


