
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var dustbin1
var dustbin2
var dustbin3

function setup() {
	canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     paper= new Paper(100,200,45) 
  
	 ground=new Ground(300,390,1900,10)

	 dustbin1=new Dustbin(width/1.4,height-45,10,60)
	 dustbin2=new Dustbin(width/1.2,height-45,10,60)
	 dustbin3=new Dustbin(width/1.292,height-20,130,10)



	Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);

  background("lightBlue");
  
  paper.display()
ground.display()

dustbin1.display()
dustbin2.display()
dustbin3.display()
 
}



function keyPressed()
{


	if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})



}


}

