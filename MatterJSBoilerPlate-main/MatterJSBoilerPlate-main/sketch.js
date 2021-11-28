var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);



	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2

	}

	//ball = createSprite(200,200,20,20)//
	ball = Bodies.circle(200,200,40,ball_options)
	World.add(world,ball)
	Engine.run(engine);

	groundObj = new Ground(300,590,800,20)
    leftSide = new Ground(400,530,20,100)
	rightSide = new Ground(550,530, 20, 100)
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:150, y:-180})
	}
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x, ball.position.y, 40,40) 
groundObj.show()
leftSide.show()
rightSide.show()
}



