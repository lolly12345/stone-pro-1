
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rabbit_IMG;
var rabbit;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = Engine.world;

  rabbit = createSprite(200,200,100,100);
  rabbit = 0.2
  rabbit.addImage(rabbit_IMG);


}

function preload(){
  
  rabbit_IMG = loadImage('Rabbit.png');


}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rabbit_IMG.show();
drawSprites();

}

