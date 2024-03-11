
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,wall4,wall5
var ground
var ball
var points = 0


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		frictionAir: 0,
		density:1.2
		

	}

		
	

	//Create the Bodies Here.
	wall1=Bodies.rectangle(700,350,5,50,{isStatic:true})
	World.add(world,wall1)
	wall2=Bodies.rectangle(790,350,5,50,{isStatic:true})
	World.add(world,wall2)

	wall3=Bodies.rectangle(800,350,100,800,{isStatic:true})
	World.add(world,wall3)
	wall4=Bodies.rectangle(0,350,100,800,{isStatic:true})
	World.add(world,wall4)
	wall5=Bodies.rectangle(400,0,900,100,{isStatic:true})
	World.add(world,wall5)


	ground=Bodies.rectangle(400,700,800,100,{isStatic:true})
	World.add(world,ground)

	ball=Bodies.circle(100, 500, 20, ball_options)
	World.add(world,ball)

	Engine.run(engine);

	rectMode(CENTER)
	ellipseMode(RADIUS)

}


function draw() {
	background(0);
		

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0})
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:3})
		

	}
	


		
	
	if(keyDown("RIGHT_ARROW")){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0})
	}

	push ()
	translate(ground.position.x,ground.position.y)
	rect (0,0,800,10)
	pop ()

	push ()
	translate(wall1.position.x,wall1.position.y)
	rect (0,0,5,40)
	pop ()

	push ()
	translate(wall2.position.x,wall2.position.y)
	rect (0,0,5,40)

	pop ()

	push ()
	translate(ball.position.x,ball.position.y)
	ellipse(0,0,10,10)
	pop ()

	drawSprites();

}



