const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas
var ground

//1. criar plano de fundo
var bgImg
var SpaceShipAnimation, SpaceShip

var angle = 90;


function preload(){
bgImg = loadImage("assets/bgSpace.gif");

SpaceShiphipAnimation = loadAnimation("./assets/SpaceShip/s1.png","./assets/SpaceShip/s2.png","./assets/SpaceShip/s3.png",
"./assets/SpaceShip/s4.png","./assets/SpaceShip/s5.png","./assets/SpaceShip/s6.png","./assets/SpaceShip/s7.png","./assets/SpaceShip/s8.png","./assets/SpaceShip/s9.png",)



}
function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;



 
  SpaceShip = createSprite(width/2, height/2 + 200, 50,50)
  SpaceShip.addAnimation("Space", SpaceShiphipAnimation)

  SpaceShip.frameDelay = 5




}

function draw(){

 
  image(bgImg, 0,0, width, height);
  
  Engine.update(engine);
 

  drawSprites();
}

function enemyOne(){


}