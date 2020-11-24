
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 
SurvivalTime=0;
   
 
}


function draw() {

  background("white");
  
  
  stroke("black");
  textSize(20);
  fill("black");
  text("SurvivalTime: "+ SurvivalTime, 100,50);
   SurvivalTime = SurvivalTime + Math.round(getFrameRate()/62);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
   monkey.collide(ground);
  
    
   
  spawnbanana();
  spawnobstacle();
  
  drawSprites();
  

}



function spawnbanana (){
  
  if(frameCount % 80 === 0){
    
  banana=createSprite(400,320,900,10);
  banana .addImage(bananaImage);
     banana.y = Math.round(random(100,120))
    banana.scale=0.1;
     banana.velocityX = -3;
    banana.lifetime=200;
  }
}
  

function spawnobstacle (){
  
  if(frameCount % 300 === 0){
    
  obstacle=createSprite(400,325,900,10);
  
  obstacle .addImage(obstacleImage);
    
    obstacle.scale=0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime=200;
     
  }
}
  

