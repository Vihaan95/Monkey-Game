var monkey , monkey_running, invisbleGround, ground;
var banana ,bananaImage, obstacle, obstacleImage, gameState, backgroundImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =               loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  backgroundImage = loadImage("background.png");
}



function setup() {
  createCanvas(600, 300);  
  
  monkey = createSprite(100, 250, 50, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  invisbleGround = createSprite(300, 255, 600, 5);
  invisbleGround.visible = false;
  
  ground = createSprite(300,150,600,300);
  ground.addImage("image", backgroundImage);
  ground.depth = monkey.depth;
  monkey.depth = monkey.depth+1;
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 550, 20);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100, 25);
  
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  monkey.collide(invisbleGround);
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(keyDown("space")&& monkey.y >= 220) {
      monkey.velocityY = -13;
  }
  
  bananas();
  obstacles();
  
  drawSprites();
}



function bananas(){
  if(World.frameCount%80===0){
    banana = createSprite(700, 200, 50, 50);
    banana.y = Math.round(random(70, 150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 125;
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(World.frameCount%150===0){
    obstacle= createSprite(500, 225, 40, 40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -8;
    obstacle.lifetime = 150;
  }
}