
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var rightWall;
var leftWall


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(0,width/2,1600,20);
    rightWall = new Ground(790,330,20,120);
	leftWall = new Ground(660,330,20,120)
	var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	}
	ball = Matter.Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  rightWall.display();
  leftWall.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-70})
  }
}