
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,200)
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  // monkey.addAnimation("collided",monkey_collided)
  monkey.scale = 0.1;
  
  survivaltime=0000
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}


function draw() {
  background(180);
  drawSprites();
  
  text ('survivaltime'+ survivaltime ,500,50 );
  survivaltime= survivaltime+ Math.round (frameCount/600) ; 
  
  
   if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  
}
function spawnbananas() {
  //write code here to spawn the bananas
  if (frameCount % 60 === 0) {
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(10,60))
    banana.scale = 0.4;
    banana.velocityX = -3;
    
    
    //assigning lifetime to the variable
    banana.lifetime = 134
    
    //adjust the depth
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    
    

  }

}


