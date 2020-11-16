
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject;

function preload()
{
	dustbinImg = loadImage("dustbingreen-1.png");
}

function setup() {
	createCanvas(800, 700);

	dustbinObj = createSprite(550, 575, 120, 120);
	dustbinObj.scale = 1.2;
	dustbinObj.addImage(dustbinImg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj =Bodies.rectangle(400, 650, 800, 10, {isStatic: true,});
	World.add(world, groundObj);

	box2 = new Box(500, 590, 20, 100);
	box3 = new Box(600, 590, 20, 100);
	box1 = new Box(550, 630, 120 ,20);

	paperObject = new paper(200, 600);
	// dustbinObj = new dustbin(600, 585, 120, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

	box1.display();
	box2.display();
	box3.display();

	paperObject.display();

	// groundObj.display();
	fill("black");
	var pos = groundObj.position;
	rect(pos.x, pos.y, 800, 10);

	dustbinObj.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:96, y:-96});
	}
}


