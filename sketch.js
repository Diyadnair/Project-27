var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,Roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100,300,40);
	bob2 = new Bob(140,300,40);
	bob3 = new Bob(180,300,40);
	bob4 = new Bob(220,300,40);
	bob5 = new Bob(260,300,40);

	roof1 = new Roof(width/2,100,width,20);

	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof1.body,-bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof1.body,-bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof1.body,-bobDiameter*2,0);
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);

	//Create a ground
	var render = Render.create({
		element: document.body,
		options = {
			width:1200,
			height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
	//Render.run(render);
	
}


function draw() {
rectMode(CENTER);
background(0);

bob1.display();  
roof1.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
  
  }
}


