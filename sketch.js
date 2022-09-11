var path,boy, leftBoundary,rightBoundary;
var pathImg;
var boyImg, boy_running;

function preload(){
  pathImg=loadImage("path.png");
 boy_running=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
}

function setup(){
  
  createCanvas(400,400);

  path=createSprite(200,180,400,20);
  path.addImage(pathImg);
  path.velocityY=9;
  path.scale=1.2;
 
boy=createSprite(190,300,20,50);
boy.addAnimation("running", boy_running);
boy.scale=0.9;


leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background("black");
  
boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
