

var trex ,trex_running;
var ground, ground_image,invisible_gruond;
var cloud,cloud_image;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 ground_image = loadImage("ground2.png");
 cloud_image= loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)

   
 ground = createSprite(300,190,600,20);
 ground.addImage("chao",ground_image);
 ground.velocityX=-3;

 trex = createSprite(50,160,30,50);
 trex.addAnimation("correndo",trex_running);
  trex.scale=0.5;

 invisible_gruond = createSprite(300,198,600,8);
 invisible_gruond.visible= false;
 
}

function draw(){
  background("white")
 if (keyDown("space")&& trex.y>168) {
  trex.velocityY=-10;
 
}
  trex.velocityY +=0.5;
 trex.collide(invisible_gruond);
  
 if(ground.x<0){
  ground.x=ground.width/2
 }
 
 drawSprites();
spawnclouds();
   console.log (trex.y)
   
  }

  function spawnclouds(){
if (frameCount%60===0) {
cloud = createSprite(600,100,40,10);
cloud.velocityX=-3;
  cloud.addImage(cloud_image);
cloud.scale=0.9
cloud.y=Math.round(random(40,120));

}
}