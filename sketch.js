const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1;
var ground1;
var slingshot;
var boy1;
var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function setup() {
	createCanvas(2000, 900);

	engine = Engine.create();
	world = engine.world;

	stone1 = new stone(250,400,10);
	ground1 = new ground(1000,890,2000,20);
  slingshot = new SlingShot(stone1.body,{x:185,y:630})
  boy1 = new boy(320,750,410,530);
  tree1 = new tree(1650,470,580,840);
  mango1 = new mango(1720,390,40);
  mango2 = new mango(1630,360,40);
  mango3 = new mango(1550,450,40);
  mango4 = new mango(1760,290,40);
  mango5 = new mango(1850,420,40);
  mango6 = new mango(1850,330,40);
  mango7 = new mango(1420,390,40);
  mango8 = new mango(1510,360,40);
  mango9 = new mango(1670,260,40);
  mango10 = new mango(1570,240,40);
  mango11 = new mango(1770,200,40);
  mango12 = new mango(1670,170,40);

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);

  background(230,230,230);
  
  ground1.display();
  stone1.display();
  boy1.display();
  slingshot.display();
  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  

  collision(stone1,mango1);
  collision(stone1,mango2);
  collision(stone1,mango3);
  collision(stone1,mango4);
  collision(stone1,mango5);
  collision(stone1,mango6);
  collision(stone1,mango7);
  collision(stone1,mango8);
  collision(stone1,mango9);
  collision(stone1,mango10);
  collision(stone1,mango11);
  collision(stone1,mango12);

  stroke("black");
  fill("black");
  textSize(50);
  text("Pluck some Mangoes! 😋",30,50);
  text("Press space to get a second chance to play!",30,100);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function collision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:185,y:630})
    slingshot.attach(stone1.body);
  }
}




