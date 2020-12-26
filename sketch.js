
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)
	box1 = new Dustbin(650,680,100,20)
  box2 = new Dustbin(590,620,20,130)
  box3 = new Dustbin(710,620,20,130)
  paper = new Paper(100,380)
  dustbin = createSprite(650,610,10,10)
  dustbin.addImage(dustbinImage)
  dustbin.scale=0.35
  
	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS)
  background(255);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  dustbin.display();
 // rect(ground.position.x,ground.position.y,400,20)
  //ellipse(ball.position.x,ball.position.y,20,20)
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-20})
  }
}


