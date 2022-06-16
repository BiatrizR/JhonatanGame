const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas
var ground








function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;



}

function draw(){

 
background(225)
  
  Engine.update(engine);
 

  drawSprites();
}

function enemyOne(){


}
