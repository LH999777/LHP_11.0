var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX= 0.3
rabbit.velocityY= -3



apple = createSprite(190,40,150,30);
apple.scale =0.09;
apple.addImage(appleImg);
apple.velocityY = 1

leaf = createSprite(50,10,150,30);
leaf.scale =0.09;
leaf.addImage(appleImg);
leaf.velocityY = 0.4

LS = createSprite(100,10,150,30);
LS.scale =0.09;
LS.addImage(appleImg);
LS.velocityY = 0.5

LH = createSprite(250,10,150,30);
LH.scale =0.09;
LH.addImage(appleImg);
LH.velocityY = 0.6

H = createSprite(300,10,150,30);
H.scale =0.09;
H.addImage(appleImg);
H.velocityY = 0.3









}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.bounceoffedge;

  drawSprites();
}

if (frameCount % 80 === 0) {
  apple = createSprite(190,100,40,10);
  apple.y = Math.round(random(10,60));
  apple.addImage(cloudImage);
  apple.scale = 0.5;
  apple.velocityX = -2;

  apple.lifetime = 200;
}