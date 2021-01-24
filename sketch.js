

var player,track,ground,enemy,enemy2
var trackImage,groundImage,playerImage
var distance=0
var obstacle
var score=0
var enemyImage,enemyImage1
var start
gameState="start"

//gameState="end"
function preload(){
trackImage=loadImage("Image/track.jpg")

playerImage=loadImage("Image/car3.png")
enemyImage=loadImage("Image/car2.png")
enemyImage1=loadImage("Image/car4.png")
}

function setup(){
createCanvas(displayWidth-10,displayHeight-20)
player=createSprite(590,350,30,30)
player.addImage(playerImage)
player.debug=true
enemy=createSprite(370,300,30,30)
enemy.shapeColor="red"
enemy.scale=1.3
enemy.debug=true
enemy.addImage(enemyImage)
enemy2=createSprite(800,390,30,30)
enemy2.addImage(enemyImage1)
enemy2.scale=1.3
enemy2.debug=true
//start.html
}

function draw(){
background("white")
//image(trackImage,0,-displayHeight*50,displayWidth,displayHeight*51)
if(gameState==="start"){
    image(trackImage,0,-displayHeight*50,displayWidth,displayHeight*51)
    if(keyDown(LEFT_ARROW)){
    player.x=player.x-5
    //player.velocityY=0
    }
   if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5
    
 }
        if(keyDown(UP_ARROW)){
     distance=distance+15
    player.y=displayHeight-distance
    camera.x=displayWidth/2
camera.y=player.y
    enemy.velocityY=-10
    enemy2.velocityY=-10
}

if(player.isTouching(enemy) || player.isTouching(enemy2)     ){
//reset()
gameState="end"
//
}
obstacles()   
}          

if (gameState==="end"){
    player.velocityY=0;
    enemy.velocityY=0;
    enemy2.velocityY=0;

    
    //textSize(30)    //textSize(30)
var start=createButton('restart')
    start.position(player.x+250,player.y+250)
//reset()
background("white")
enemy.visible=false
enemy2.visible=false
player.visible=false
textSize(60)
fill("red")
text("Game Ended ",displayWidth/2-50,displayHeight-(distance+40))
text("plz restart ",displayWidth/2-50,displayHeight-distance)
textSize(30)
text("press spacebar to play again",displayWidth/2 -50,displayHeight-(distance-60))

if(keyDown(DOWN_ARROW)){
    gamestate="start"
}
}

drawSprites()
}
 function obstacles(){
if (frameCount%60===0){
obstacle=createSprite(400,300,60,60)
obstacle.x=Math.round(random(200,800))
obstacle.y=Math.round(random(displayHeight,displayHeight*51))
obstacle.shapeColor="green"
}
}
function reset(){






}