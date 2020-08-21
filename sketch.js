const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
   const Body = Matter.Body;
	var stone1, tree1, platform1, mango1, mango2, mango3; 
	function preload() {
		 stone1=loadImage("Plucking mangoes/stone.png") 
		}
function setup() {
createCanvas(800, 700);
 engine = Engine.create();
  world = engine.world;
   //Create the Bodies Here.
	stone2 = new stone(400,350,20);
	mango1 = new mango(400,350,20);
	tree1 = new tree(700,670,20,20);
	platform1 = new ground(400,680,800,10);
	 Engine.run(engine); 
	}
	 function draw() { 
		 rectMode(CENTER); 
		  background("blue");
		  stone2.display();
		  mango1.display();
		  tree1.display();
		  platform1.display();
		   drawSprites();
		 }

