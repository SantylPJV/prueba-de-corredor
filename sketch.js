var villano, villanoImg;
var mano, manoImg, chasquido;
var mano2;
var chims, chimsImg;
var gameState = "WAIT";
var cityloop;
var misibola,misilImg;


function preload(){
 villanoImg = loadImage("el villano.png");
 manoImg = loadImage("mano.png");
 chimsImg = loadImage("chims.png");
 chasquido = loadAnimation("prechasquido.png","chasquido.png");
 cityloop = loadImage("cityloop.png");
 misilImg = loadImage("misibola.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 chims = createSprite(width/8,height/2,40,40);
 chims.addImage(chimsImg);
 chims.scale = 4;

 villano=createSprite(width-150,height - (height/3+(height/3)),40,40);
   villano.scale=3;
   villano.addImage(villanoImg);
  
   mano=createSprite(width-320,height - (height/3+(height/4)),40,40);
   mano.scale=3;
   mano.addImage(manoImg);

   mano2=createSprite(width-50,height - (height/3+(height/4)),40,40);
   mano2.scale=3;
   mano2.addImage(manoImg);

   
}

function draw() {
 background("white");
 image(cityloop,0,0,400,400);

 textSize(40);
 fill("black");
 stroke("white");

 

 if (gameState==="WAIT"){

    text("Presiona espacio para Pelear",width/2,height/2);

    if(keyDown("space")){
      gameState="PLAY";
    }
     
 }

 

 if(gameState==="PLAY"){

  attack();

   if(villano.y  < (height/2)){
      villano.velocityY = villano.velocityY + 2;
   }
   

   if(villano.y  > (height/2)){
      villano.velocityY=villano.velocityY - 2;
     }
    
     if(mano.y  > (height/2)){
      mano.velocityY = mano.velocityY - 2;
   }

   if(mano.y  < (height/2)){
      mano.velocityY = mano.velocityY + 2;
   }

   if(mano2.y  > (height/2)){
      mano2.velocityY=mano2.velocityY - 2;
     }


   if(mano2.y  < (height/2)){
      mano2.velocityY=mano2.velocityY + 2;
     }
   }

     drawSprites();
 }
  


function attack (){

   if(frameCount % 300===0){
   
   for(var misil = 1; misil<=12 ; misil=misil + 1){
    misibola = createSprite(villano.x,villano.y,);
    misibola.addImage(misilImg);
    misibola.scale = 2;
    misibola.velocityX=Math.round(random(-15,-17,-19,-20,-23));
   }
   
}

   
}