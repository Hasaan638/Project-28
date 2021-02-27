
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint = Matter.Constraint;
//var,treeObject,StoneObject,GroundObject,launcherObject,Mango,World,Boy,launchingforce=100

function preload()
{
//loadImage	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    //stoneObject = new Stone(235,420,30)
	//var Render=Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  //display
 
}


//function mouseDragged()

//function mouseReleased()

